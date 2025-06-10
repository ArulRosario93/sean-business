
import express, { json } from 'express';
import cors from 'cors';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { count, getDoc, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore"; 
import 'dotenv/config';

// Firebase configuration
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
const auth = getAuth()

// Initialize the Server (App)
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
        res.json(data);

    } catch (error) {
        
        console.error("Error fetching products: ", error);
        res.status(500).json({ error: 'Failed to fetch products' });

    }

});

// USER LOGIN

app.post("/userlogin", async (req, res) => {

    const { email, password } = req.body;

    // LOGIN ACCOUNT THROUGH FIREBASE
    
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const userID = userCredentials.user.uid;

        const usersRef = collection(dbApp, 'users');
        // Create a new document in the 'users' collection with the user's UID as the document ID
        const userDocRef = doc(usersRef, userID);

        // Get the user data from the Firestore document
        getDoc(userDocRef)
        .then((doc) => {
            if (doc.exists()) {
                const userData = doc.data();
                console.log("User logged in successfully:", userData);
                res.json(userData);
            } else {
                console.log("No such user document!");
                res.json({ error: "No such user document!" });
            }
        })
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        res.json(error.message);
    });

});

// USER ACC 
// {
//     name: "Arul",
//     uid: "(ID)"
//     emailAddress: "itsarrowhere380@gmail.com",
//     phoneNumber: "9043870363",
//     addedToCart: ["(productID)"],
//     orders: [
//         {
//             name: "Red OVersized",
//             price: '900',
//             status: "Recieved || Cancelled || Out For Delivery",
//             dateOrdered: "25/10/2025",
//         },
//     ]
// }

// USER REGISTER
app.post("/userregister", async (req, res) => {

    const { email, password, name } = req.body;

    // REGISTER USER THROUGH FIREBASE

    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const userID = userCredentials.user.uid;

        const user = { 
            name: name,
            uid: userID,
            emailAddress: email,
            phoneNumber: "",
            addedToCart: [],
            orders: []
        };

        // Create a reference to the 'users' collection in Firestore
        const usersRef = collection(dbApp, 'users');
        // Create a new document in the 'users' collection with the user's UID as the document ID
        const userDocRef = doc(usersRef, userID);
        // Set the user data in the Firestore document
        setDoc(userDocRef, user)
        .then(() => {
            console.log("User registered successfully:", user);
        })
        
        res.json(user);
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        res.json(error.message);
    })

});


// ADMIN METHODS

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