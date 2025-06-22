import React from 'react';

class AdminMethods{

    constructor() {
        // Constructor logic if needed
    }

    // method to pa
    static async handleAdminLogin(password, setPassword, setIsAdmin) {
        // Check if the password is correct
        await fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
        .then((response) => response.json())
        .then((data) => {
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
        const res = await fetch('http://localhost:5000/admin/product', {
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

        const res = await fetch('http://localhost:5000/admin/product', {
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

        const res = await fetch('http://localhost:5000/admin/product/edit', {
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
        const res = await fetch('http://localhost:5000/admin/orders', {
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

        const res = await fetch('http://localhost:5000/admin/orders/id', {
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
}

export default AdminMethods;