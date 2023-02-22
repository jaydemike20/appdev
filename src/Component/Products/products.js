import './products.css';
import 'boxicons';



function Products(props) {

    return (
        <div className='container1'>

            <div className='row'>

                {props.details.map((value, index) =>(

                <div className='column'>
                    <div className='card'>
                    
                        <img src={value.img} style={{width: 100, height: 163}}  className="productimage" />            

                        <div className='containercard'>
                            <h4>{value.name}</h4>
                            <p> ₱{value.price}.00</p>

                            <button className='minus'>-</button>
                            <button className='plus'>+</button>
                        </div>
                        
                    </div>
                </div>
     
                    ))}

            </div>


        </div>
    )
}


export default Products;