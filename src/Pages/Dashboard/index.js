import Navbar from '../../Component/Navbar/index'
import './index.css';
import 'boxicons';
import SearchBar from '../../Component/Searchbar';
import Products from '../../Component/Products/products';
import ProductData from '../../Data/data';



function Dashboard() {


    const handleDiscard = () => {

        console.log('delete');
    }

    const handlePayment = () => {
        console.log('Payment');
    }

    return(
        <div>
            <Navbar />

            <div className="totalsales">

                <h2>Total Sales</h2>

                <h3>₱ 0.00</h3>

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

                        <tr>
                            <td>Emperador</td>
                            <td>Empe</td>
                            <td>3</td>
                            <td>182.00</td>
                        </tr>

                        <tr>
                            <td>Emperador Light</td>
                            <td>Empe Light</td>
                            <td>3</td>
                            <td>182.00</td>
                        </tr>

                    </table>


                </div>

                <div className="tabletext">
                    <h2>Total</h2>
                    <h2>₱ 0.00</h2>
                </div>


                <div className="tablebuttons">
                    <ul>
                        <li>
                        <button onClick={handleDiscard} style={{background:'#923333'}}><box-icon type='solid' name='trash' size='md' color='lightblue' animation='tada-hover'></box-icon>Discard</button>
                        </li>
                        <li>
                        <button onClick={handlePayment} style={{background:'#8AAF5A'}}><box-icon name='money' size='md' color="green" animation='tada-hover'></box-icon>Payment</button>
                        </li>                        
                    </ul>

                </div>



            </div>

            <SearchBar />
            <Products details={ProductData} />
                   
        </div>
    );
}


export default Dashboard;
