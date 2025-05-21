
import express, { json } from 'express';
import cors from 'cors';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { count, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"; 
import 'dotenv/config';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};

// Initialize Firebase
const DB = initializeApp(firebaseConfig);
const dbApp = getFirestore(DB);


const app = express();
const PORT = process.env.PORT || 5000;

const ipList = {};

// Middleware to enable CORS (Cross-Origin Resource Sharing)
// This is important for allowing requests from different origins (like your frontend app)
app.use(cors());
// Middleware to parse JSON data
// This is important for handling JSON data in requests and responses
app.use(express.json());
// Middleware to parse URL-encoded data (form submissions)
// This is important for handling form submissions
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files (like images, CSS, JS) from the 'public' directory
// This is important for serving static assets in your application
// For example, if you have images or stylesheets in the 'public' directory, they will be accessible at the root URL
app.use(express.static('public'));



const handleIPAddressTracker = (address) => {

    

}


const getProducts = async () => {

    // Create a reference to the 'products' collection in Firestore
    const productsRef = collection(dbApp, 'products');

    // Fetch all documents from the 'products' collection
    const snapshot = (await getDocs(productsRef));

    // Map through the documents and extract their data
    const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    // Return the array of products
    return products;

}

const getProductByName = async (name, count) => {

    const productsRef = collection(dbApp, 'products');
    // Create a reference to the document you want to retrieve by field "name"

    // const productRef = doc(productsRef, "Golden Oversized");
    // only one product
    
    const productRef = query(productsRef, where("name", "==", name));

    const res = (await getDocs(productRef, )).docs[0].data();

    console.log("GOT PRODUCT BY NAME: ", res);
    return res;
    
};

app.post('/products/name', async (req, res) => {
    const { name } = req.body;
    
    try {
        
        // Create a reference to the document you want to retrieve by field "name"

        const data = await getProductByName(name, 5);
        console.log("getting ", data);
        res.json(data);

    } catch (error) {
        
        console.error("Error fetching products: ", error);
        res.status(500).json({ error: 'Failed to fetch products' });

    }
});

app.get('/products', async (req, res) => {

    try {
        
        // Create a reference to the document you want to retrieve by field "name"

        const data = await getProducts();

        console.log("getting ", data);
        res.json(data);

    } catch (error) {
        
        console.error("Error fetching products: ", error);
        res.status(500).json({ error: 'Failed to fetch products' });

    }

});

app.post("/admin", async (req, res) => {

    const { password } = req.body;

    try {
        
        // Create a reference to the document you want to retrieve by field "name"

        if(password == process.env.ADMINPASSWORD) {
            const data = await getProducts();
            res.json(true);
        }else{
            res.json(false);
        }
        
    } catch (error) {
        
        res.status(500).json({ error: 'failed to login' });

    }

});

app.post("/admin/product", async (req, res) => {

    // get only one product by name
    const { name } = req.body;

    console.log("name: ", name);
    try {
        // Create a reference to the document you want to retrieve by field "name"

        const data = await getProductByName(name, 1);
        console.log("getting ", data);
        res.json(data);
        
    } catch (error) {
        res.status(500).json({ error: 'failed to login' });

    }
});

app.get('/', (req, res) => {

    console.log(req.socket.remoteAddress);

    res.send(`Hello World! ${req.socket.localAddress}`,);

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});