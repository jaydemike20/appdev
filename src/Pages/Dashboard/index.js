import Navbar from '../../Component/Navbar/index'
import '../Dashboard/dashboard.css';
import 'boxicons';
import SearchBar from '../../Component/Searchbar';
import Products from '../../Component/Products/products';
import ProductData from '../../Data/data';
import { useDispatch, useSelector } from 'react-redux';
import { resetValues, setCustomerCash, setCustomerChange, setTotalSales } from '../../Component/Products/productSlice';
import { useState } from 'react';
import Modal from 'react-modal';

function Dashboard() {

    const dispatch = useDispatch();

    const handleDiscard = () => {
        dispatch(resetValues());
    }


    const payment = useSelector((state) => state.product.payment);
    const totals = useSelector((state) => state.product.total);
    const totalSale = useSelector((state) => state.product.totalsales);
    const change = useSelector((state) => state.product.customerChange);



    // modal for payment
    const [modal, setModal] = useState(false);

    const handleModalOpen = () => {
        setModal(true);
    }

    const handleModalClose = () => {
        setModal(false);
        dispatch(resetValues());
    }



    return(
        <div>
            <Navbar />

            <div className="totalsales">

                <h2>Total Sales</h2>

                <h3>₱ {totalSale}.00</h3>

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
                    <h2>₱ {totals} </h2>
                </div>


                <div className="tablebuttons">
                    <ul>
                        <li>
                        <button onClick={handleDiscard} style={{background:'#923333'}}><box-icon type='solid' name='trash' size='md' color='lightblue' animation='tada-hover'></box-icon>Discard</button>
                        </li>
                        <li>
                        <button onClick={handleModalOpen} style={{background:'#8AAF5A'}}><box-icon name='money' size='md' color="green" animation='tada-hover'></box-icon>Payment</button>
                        </li>                        
                    </ul>


                </div>



            </div>

            <SearchBar />
            <Products details={ProductData} />

            <Modal className='modall' isOpen={modal}  onRequestClose={handleModalClose}>
                    
                <div className='cash'>
                    <h3>Cash</h3>
                    <input type="number" inputMode='numeric' placeholder='Enter amount...' onChange={(e) => {
                        dispatch(setCustomerCash(e.target.value));
                    }} />
                </div>
                

                <div className='totalcash'>
                    <h3>Total</h3>
                    <p>₱ {totals}.00</p>
                </div>


                <div className='hrr'>
                    <hr />
                </div>

                <div className='change'>
                    <h3>Change</h3>
         
                    <p>₱{change}</p>
                </div>

                <div className='confirm'>
                    <button onClick={() => {
                        dispatch(setTotalSales(totals));
                        dispatch(resetValues());
                        setModal(false);
                    }}>Confirm</button>
                </div>


            </Modal>


        </div>
    );
}


export default Dashboard;
