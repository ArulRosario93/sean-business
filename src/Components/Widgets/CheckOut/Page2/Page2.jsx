
import React from "react";
import TextField from '@mui/material/TextField';
import "./Page2.css";

const Page2 = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [pincode, setPincode] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted with values:", { name, email, address, pincode });
    }

    return (
        <div className="Page2">
            
            {/* Form to ask user, Name, Email Address, Full Address pincode using mui */}
            <div className="Page2Form">
                <h2 className="Page2FormHeader">Enter Your Details</h2>
                <form>
                    <div className="formGroup">
                        {/* <label htmlFor="name">Name:</label> */}
                        <TextField 
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            fullWidth
                            required
                        />
                        {/* <input type="text" id="name" name="name" required /> */}
                    </div>
                    <div className="formGroup">
                        {/* <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" required /> */}
                        <TextField 
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email Address"
                            size="large"
                            type="email"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="formGroup">
                        {/* <label htmlFor="address">Full Address:</label>
                        <input type="text" id="address" name="address" required /> */}
                        <TextField 
                            id="address"
                            name="address"
                            label="Full Address"
                            variant="outlined"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="formGroup">
                        {/* <label htmlFor="pincode">Pincode:</label>
                        <input type="text" id="pincode" name="pincode" required /> */}
                        <TextField 
                            id="pincode"
                            name="pincode"
                            label="Pincode"
                            variant="outlined"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            type="number"
                            fullWidth
                            required
                        />
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Page2;