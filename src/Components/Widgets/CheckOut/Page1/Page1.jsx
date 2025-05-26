import React, { useState } from "react";
import './Page1.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Page1 = () => {

    const [mobileNumber, setMobileNumber] = useState("");
    const [extendOrder, setExtendOrder] = useState(false);
    const [notifyMe, setNotifyMe] = useState(true);

    const handleMobileNumberChange = (e) => {
        const value = e.target.value;
        // Validate the mobile number to ensure it is 10 digits
        if (/^\d{0,10}$/.test(value)) {
            setMobileNumber(value);
        }
    }

    return (

        <div className="Page1">

            {/* Section one */}
            <div className="Page1OrderSummary">

                <div className="Page1OrderSummaryHeader">
                    <div className="Page1OrderSummaryHeaderLeft">
                        <ShoppingCartOutlinedIcon />
                        <p>Order Summary</p>
                        <ArrowDropDownIcon />
                    </div>

                    <div className="Page1OrderSummaryHeaderRight">
                        <p className="secondaryPrice"><CurrencyRupeeIcon fontSize="x-small"  className="Page1OrderSummaryHeaderRightSecondaryPrice" /> 1999</p>
                        <p className="finalPrice"><CurrencyRupeeIcon fontSize="x-small" className="Page1OrderSummaryHeaderRightFinalPrice" /> 899</p>
                    </div>
                </div>

            </div>

            {/* Section two */}
            <div className="Page1EnteringMobileNumber">

                <h2 className="Page1EnteringMobileNumberHeader">Enter Mobile Number</h2>
                <div className="Page1EnteringMobileNumberInput">
                    +91
                    <div className="Page1EnteringMobileNumberInputField">
                        <input value={mobileNumber} type="number" onChange={handleMobileNumberChange} name="mobileNumber"  id="" />
                    </div>
                </div>
                {/* Check for to notify user that to send messages to mobile number*/}
                <div className="Page1EnteringMobileNumberCheckbox">
                    <input type="checkbox" name="notifyMe" id="notifyMe" checked={notifyMe} onChange={() => setNotifyMe(!notifyMe)} />
                    <label htmlFor="notifyMe">Notify me about the order status on this number</label>
                </div>

            </div>

            {/* Section three */}
            <div className="Page1Continue"></div>

        </div>

    );
}

export default Page1;