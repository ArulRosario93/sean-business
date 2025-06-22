import React from 'react';
import './OrderList.css';

const OrderList = ({ order }) => {

    return (
        <div className='OrderListContainer'>

            <div className="OrderList">

                <div className='OrderListImage'>
                    <img src='https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Order Item" />
                </div>

                <div className='OrderListDetails'>

                    <div className='OrderListDetailsNameNid'>

                        <h3 className='OrderListDetailsName'>Order Name</h3>
                        <p className='OrderListDetailsNid'>Order ID: 123456789</p>

                    </div>

                    <div className='OrderListDetailsStatus'>
                        <select name="status" value='Pending' id="status" className='OrderListDetailsStatusSelect'>
                            <option value="pending">Pending</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                        </select>
                        <p className='OrderListDetailsStatusTextName'>status</p>
                    </div>

                    <div className='OrderListDetailsOrderedOn'>
                        <p className='OrderListDetailsOrderedOnText'>2023-10-01</p>
                        <p className='OrderListDetailsOrderedOnTextName'>ordered on</p>
                    </div>

                    <div className='OrderListDetailsPrice'>
                        <p className='OrderListDetailsPriceText'>$100.00</p>
                        <p className='OrderListDetailsPriceTextName'>price</p>
                    </div>




                </div>


            </div>

            {/* <div className='OrderListFeeback'>

                <div className='OrderListFeedbackContainer'>
                    <div className='OrderListFeedbackText'>Feedback: {order?.feedback}</div>
                    <div className='OrderListFeedbackRating'>Rating: {order?.rating} stars</div>
                </div>

            </div> */}

        </div>
    );

}


export default OrderList;