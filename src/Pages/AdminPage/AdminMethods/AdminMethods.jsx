import React from 'react';

class AdminMethods{

    constructor() {
        // Constructor logic if needed
    }

    // method to pa
    static async handleAdminLogin(password, setPassword, setIsAdmin) {

        // console.log("Attempting to log in as admin with password:", password);

        // Check if the password is correct
        await fetch(`${import.meta.env.VITE_SERVER_URL}/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
        .then((response) => response.json())
        .then(async (data) => {

            console.log("PASSWORD SENT:", password);
            console.log("PASSWORD GOT:", data);
            console.log("PASSWORD   :", data == password);

            const hash = bcrypt.hashSync(password, 10); // Hash the password from environment variable
            console.log("HASHED PASSWORD:", hash);

            if (data) {
                setIsAdmin(true);
            } else {
                alert("Invalid password");
                setPassword("");
            }
        });
    }

    // method to return all products
    static async handleAdminSearchProduct(setShowLogin) {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/product`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            },
        })
        const data = res.json();
        if(data?.error == "failed to login") {
            alert("You might be Admin but Please Login to Continue");
            setShowLogin(true);
        }
        return data;
    }


    static async handleAdminSearchProductByName(searchValue, setShowLogin) {

        const name = `${searchValue}`.trim();

        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
        const data = res.json();
            
        if(data?.error == "failed to login") {
            alert("You might be Admin but Please Login to Continue");
            setShowLogin(true);
        }
        return data;
    }

    static async handleAdminSearchProductEdit(productId, productdata) {

        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/product/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, productdata }),
        })
        
        const data = res.json();

        if(data?.error == "failed to login") {
            alert("You might be Admin but Please Login to Continue");
            setShowLogin(true);
        }

        return data;

    }

    static async handleAdminSearchOrder(setShowLogin) {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
            
        if(data?.error == "failed to login") {
            alert("You might be Admin but Please Login to Continue");
            setShowLogin(true);
        }
        return data;
    };

    static async handleAdminSearchOrderByID(orderSearchValue, setShowLogin) {

        const id = `${orderSearchValue}`.trim();

        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/orders/id`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })

        const data = res.json();

        if(data?.error == "failed to login") {
            alert("You might be Admin but Please Login to Continue");
            setShowLogin(true);
        }
        return data;
    };

    static async handleServerCall(productData){
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/createproduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ productData })
            });
            const data = await response.json();
            console.log("Response from server:", data);
            if (response.ok) {
                console.log("Product created successfully:", data);
                setFinalProduct(data);
            } else {
                console.error("Error creating product:", data);
                alert(`Error creating product: ${data.error}`);
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error occurred while creating product.");
        }
    }
}

export default AdminMethods;