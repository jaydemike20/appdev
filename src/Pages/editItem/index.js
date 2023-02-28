import Navbar from "../../Component/Navbar/index";
import React, {useState} from 'react'
import SearchBar from "../../Component/Searchbar";
import './index.css';
import ProductData from '../../Data/data';
function EditItem() {
    return(
        <div>
            <Navbar />
            <div className = "centered">
                <div className = "searchbarr">
                    <SearchBar/>
                </div>
            </div>
            <div className = "centeredd">
                <div className = "productss">
                    <div className='roww'>
                    {ProductData.map((value, index) => (
                        
                            <div className='columnn' key={index}>
                                
                                <div className='cardd'>
                                
                                    <img src={value.img} style={{width: 100, height: 163}}  className="productimage" />            
                    
                                    <div className='containercardd'>
                                        <h4>{value.name}</h4>
                                        <p> ₱{value.price}.00</p>
                                        <button className='edit'>Edit</button>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                         <div className="edititem">
                            
                         </div>
                </div>
               
            </div>
            </div> 
        </div>
    );
}


export default EditItem;
