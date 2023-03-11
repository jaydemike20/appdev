import Navbar from '../../Component/Navbar/index'
import '../Dashboard/dashboard.css';
import 'boxicons';

import Products from '../../Component/Products/products';
import ProductData from '../../Data/data';
import { useDispatch, useSelector } from 'react-redux';
import { resetValues, setCustomerCash, setTotalSales } from '../../Component/Products/productSlice';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';


function Dashboard() {

    const dispatch = useDispatch();

    const handleDiscard = () => {
        dispatch(resetValues());
    }


    const payment = useSelector((state) => state.product.payment);
    const totals = useSelector((state) => state.product.total);
    const change = useSelector((state) => state.product.customerChange);
    const cash = useSelector((state) => state.product.customerCash);
    const totalSales = useSelector((state) => state.product.totalsales);

    useEffect(() => {
      localStorage.setItem("totalSales", totalSales);
    }, [totalSales]);


    // modal for payment
    const [modal, setModal] = useState(false);

    const handleModalOpen = () => {
        setModal(true);
    }

    const handleModalClose = () => {
        setModal(false);
        dispatch(resetValues());
    }

    // modal for saleshistory
    const [salesmodal, setSalesModal] = useState(false);

    const handleSalesModalOpen = () => {
        setSalesModal(true);
    }

    const handleSalesModalClose = () => {
        setSalesModal(false);
    }



    return(
        <div>
            <Navbar />

            <div className="totalsales">

                <div className='saleshistory'>
                    <h2>Total Sales</h2>
                    {/* <button title="History" onClick={handleSalesModalOpen}><box-icon name='history' size="sm" color='red' animation='tada'></box-icon></button> */}
                    
                </div>

                <h3>₱ {totalSales.toFixed(2)}</h3>


                {/* to be continued soon */}
                {/* <Modal className='salesmodal' isOpen={salesmodal} onRequestClose={handleSalesModalClose}>

                    <h1>History</h1>

                    <div>
                        <p>March 9, 2023</p>

                    </div>                    

                    <div className='historytable'>
                    <table>
                        <tr>
                            <th className="tablename">Name</th>
                            <th className="tableqty">Qty</th>
                            <th className="tableprice">Price</th>
                        </tr>

                        <tr>
                            <td>tuyo</td>
                            <td>1</td>
                            <td>32.32</td>
                        </tr>
                    </table>
                    </div>
                    <hr />
                    <div className="tabletext">
                        <h2>Total</h2>
                        <h2>₱ {totalSales.toFixed(2)} </h2>
                    </div>




                </Modal> */}

            </div>

            <div className="table"> 

                <div className="containertable">

                    <table>
                        <tr>
                            <th className="tablename">Name</th>
                            <th className="tablecode">Code</th>
                            <th className="tableqty">Qty</th>
                            <th className="tableprice">Price</th>
                        </tr>

                    {payment.map((value, index) => (

                        <tr key={value.code}>
                            <td>{value.name}</td>
                            <td>{value.code}</td>
                            <td>{value.qty}</td>
                            <td>{value.price}</td>
                        </tr>

                        ))}


                    </table>


                </div>

                <div className="tabletext">
                    <h2>Total</h2>
                    <h2>₱ {totals.toFixed(2)} </h2>
                </div>


                <div className="tablebuttons">
                    <ul>
                        <li>

                        <button 
                        onClick={handleDiscard} 
                        style={{background:'#923333', borderRadius: '20px'}}
                        ><box-icon 
                        type='solid' 
                        name='trash' 
                        size='sm' 
                        color='lightblue' 
                        animation='tada-hover'
                        ></box-icon>Discard</button>
                        </li>
                        <li>

                        <button 
                        onClick={handleModalOpen} 
                        style={{background:'#8AAF5A', borderRadius: '20px'}}
                        ><box-icon 
                        name='money' 
                        size='sm' 
                        color="green" 
                        animation='tada-hover'
                        ></box-icon>Payment</button>
                        </li>                        
                    </ul>


                </div>



            </div>

            <Products details={ProductData} />

            <Modal className='modall' isOpen={modal}  onRequestClose={handleModalClose}>
                    
                <div className='cash'>
                    <h3>Cash</h3>
                    <div className='divinput'>
                        <input type="number" inputMode='numeric' placeholder='Enter amount...' onChange={(e) => {
                            dispatch(setCustomerCash(e.target.value));
                        }} />
                    </div>
                </div>
                

                <div className='totalcash'>
                    <h3>Total</h3>
                    <div className='divtotalcash'>
                        <p>₱ {totals.toFixed(2)}</p>
                    </div>
                </div>


                <div className='hrr'>
                    <hr />
                </div>

                <div className='change'>
                    <h3>Change</h3>
                    
                    <div className='divchange'>
                        <p>₱ {change.toFixed(2)}</p>
                    </div>

                </div>

                <div className='confirm'>
                    <button onClick={() => {

                        if (cash >= totals) {
                            dispatch(setTotalSales(totals));
                        }

                        dispatch(resetValues());
                        setModal(false);
                    }}>Confirm</button>
                </div>


            </Modal>


        </div>
    );
}


export default Dashboard;
