import React, { useState } from "react";
import "./CheckOut.css";
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, Stack } from "@mui/material";
import { Pagination }  from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

const CheckOut = () => {

    const [page, setPage] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(true);

    const handlePageChange = () => {

        if (page >= 2) {
            // If the last page is reached, you can handle the submission or closing of the dialog
            console.log("Checkout completed");
            return;
        }

        setPage(page + 1);
    }

    const handlePageBack = (val) => {
        setPage(Number(val.target.textContent));
        // If the user clicks on the first page, you can handle the logic to reset or close the dialog
    }

    const handleCheckMobileNumber = (number) => {

        // Validate the mobile number to ensure it is 10 digits
        if (/^\d{10}$/.test(number) && number.length === 10) {
            return true; // Valid mobile number
        } else {
            return false; // Invalid mobile number
        }
    }

    const handleCloseDialog = () => {
        // Logic to close the dialog or reset the state
        setDialogOpen(false);
    }

    return (
        <Dialog open={dialogOpen} fullWidth maxWidth={'sm'} className="CheckOutDialog">

            <div className="CheckOutBackground">

                <div className="CheckOut">
                    
                    <div className="CheckOutHeader">
                        <div>logo</div>
                        <div onClick={handleCloseDialog} className="CheckOutHeaderCloseIcon">
                            <CloseIcon className="CheckOutHeaderClose" />
                        </div>
                    </div>

                    <Pagination onClick={handlePageBack} style={{gap: '10px'}} count={3} size='small' variant='outlined' color="secondary" hidePrevButton hideNextButton  />
                    {/* Pages */}
                    {
                        page === 1 ? <Page1 /> :
                        page === 2 ? <Page2 /> :
                        null
                    }

                </div>

                <div className="CheckOutFooterContainer">
                    <div className="CheckOutContinue" onClick={handlePageChange}>
                        {page === 2? "Move to pay" :"Continue"}
                        <ArrowRightAltIcon />
                    </div>

                    <div className="CheckOutFooter">
                        <div className="CheckOutFooterLeft">
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="CheckOutFooterRight">
                            <p>Help</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>

            </div>
        </Dialog>
    );
}

export default CheckOut;