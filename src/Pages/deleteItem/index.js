import React, {useState} from 'react'
import Navbar from "../../Component/Navbar/index";
import SearchBar from "../../Component/Searchbar";
import ProductData from '../../Data/data';
import './index.css';
import Modal from 'react-modal';
import warningicon from "../../Component/icon/warning-icon.png"

function DeleteItem() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [productName, setProductName] = useState('');    
    const handleDelete = (name) => {
        setModalIsOpen(true);
        setProductName(name);
    };
    
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
                                        <button className='delete' onClick={() => handleDelete(value.name)}>Delete</button>
                                        <Modal className = 'modal' isOpen={modalIsOpen} overlayClassName="modal-overlay">
                                            <img src={warningicon} className="warning"/>  
                                            <h2>Are you sure to delete<br></br> {productName}? </h2>
                                            <div className = 'buttons'>
                                                <button className = 'cancel' onClick={() => setModalIsOpen(false)}>CANCEL</button>
                                                <button className = 'yes' onClick={() => setModalIsOpen(false)}>YES</button>
                                            </div>
                                            
                                        </Modal>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            </div>  
            
                    
        </div>
    );
}


export default DeleteItem;
