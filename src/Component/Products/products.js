import './products.css';
import 'boxicons';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addItemPlus, decrement, deleteItem, increment } from './productSlice';


function Products(props) {

    const dispatch = useDispatch();

    const payment = useSelector((state) => state.product.payment);

    return (
        <div className='container1'>

            <div className='row'>

                {props.details.map((value, index) =>(

                <div className='column' key={index}>
                    <div className='card'>
                    
                        <img src={value.img} style={{width: 100, height: 163}}  className="productimage" />            

                        <div className='containercard'>
                            <h4>{value.name}</h4>
                            <p> ₱{value.price}.00</p>

                            <button className='minus' onClick={() => {
                                
                                dispatch(decrement(value))

                            }}>-</button>
                            <button className='plus' onClick={() => {

                                dispatch(increment(value));


                            }}>+</button>
                        </div>
                        
                    </div>
                </div>
     
                    ))}

            </div>


        </div>
    )
}


export default Products;