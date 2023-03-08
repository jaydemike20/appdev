import Navbar from '../../Component/Navbar/index';
import './index.css'
import React, { useState } from 'react';
import uploadicon from "../../Component/icon/upload-icon.png"
import addicon from "../../Component/icon/add-icon.png"
import { addProduct, saveProductData } from '../../Data/data';


function AddItem() {
    const [selectedFile, setSelectedFile] = useState(null);

    const [data, setData] = useState({
        code: '',
        name: '',
        qty: 1,
        price: 0,
        imgURL: '',
        category: '',
    })

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleAddItem = () => {
        addProduct(data.code, data.name, data.qty, data.price, data.imgURL, data.category);
        saveProductData();
    }
    
    return(
        <div>
            <Navbar />


            <div className = 'box'>
                <img src={data.imgURL} width='250px' />
                {/* <div>
                {selectedFile && (
                <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded file preview"
                className="uploaded-file-preview"
                draggable="false"
                />
            )}
                </div> */}

                <div className= 'productname'>
                    <p>Name</p>
                    <input 
                    placeholder='type here'
                    value={data.name}
                    onChange={(event) => {
                        let d = data;
                        setData({...d, name: event.target.value})
                    }} />
                </div>

                <div className= 'code'>
                    <p>Code</p>
                    <input 
                    placeholder='type here' 
                    value={data.code}
                    onChange={(event) => {
                        let d = data;
                        setData({...d, code: event.target.value})
                    }} />
                    
                </div>
                <div className= 'price'>
                    <p>Price</p>
                    <input 
                    type="number"
                    placeholder='type here'
                    value={data.price}
                    onChange={(event) => {
                        let d = data;
                        setData({...d, price: event.target.value})
                    }} />
                </div>
                <div className= 'category'>
                    <p>Category</p>
                    <input 
                    placeholder='type here'
                    value={data.category}
                    onChange={(event) => {
                        let d = data;
                        setData({...d, category: event.target.value})
                    }} />
                </div>

                <div className= 'category'>
                    <p>ImageURL</p>
                    <input 
                    placeholder='type here'
                    value={data.imgURL}
                    onChange={(event) => {
                        let d = data;
                        setData({...d, imgURL: event.target.value})
                    }} />
                </div>        
                {/* <div class="file-upload">
                    <p>Upload</p>
                    
                    <label>
                         
                        <div><img src={uploadicon} alt="My Image" />
                        <span>{selectedFile ? selectedFile.name : 'Select a file'}</span></div>
                        <input type="file" onChange={handleFileInputChange} accept="image/*"/>
                        
                    </label>
                </div> */}

                {/* try imageURL */}



                <div className= 'additem'>
                    <button onClick={handleAddItem}>
                        <img src={addicon} alt="My Image" />
                        <span>ADD ITEM</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default AddItem;
