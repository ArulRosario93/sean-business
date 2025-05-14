
import express, { json } from 'express';
import cors from 'cors';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
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

app.get('/products', (req, res) => {
    // Send the data as a JSON response
    res.json(data);
});

const getProductByName = async (name) => {

    const productsRef = collection(dbApp, 'products');
    // Create a reference to the document you want to retrieve by field "name"

    // const productRef = doc(productsRef, "Golden Oversized");
    const productRef = query(productsRef, where("name", "==", name));

    const res = (await getDocs(productRef)).docs[0].data();

    console.log("getting ", res);
    
};

app.get('/', (req, res) => {

    const data = {
        message: 'Hello from the server!',
        timestamp: new Date().toISOString()
    };

    console.log("GET request received at /");
    getProductByName("Golden Oversized");

    // Send a JSON response with the data
    // res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});