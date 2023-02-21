import Navbar from '../../Component/Navbar/index';
import './index.css'
import React, { useState } from 'react';
import uploadicon from "../../Component/icon/upload-icon.png"
import addicon from "../../Component/icon/add-icon.png"

function AddItem() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    
    return(
        <div>
            <Navbar />
            
            <div className = 'box'>
                <div>
                {selectedFile && (
                <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded file preview"
                className="uploaded-file-preview"
                draggable="false"
                />
            )}
                </div>
                <div className= 'productname'>
                    <p>Name</p>
                    <input placeholder='type here'></input>
                </div>
                <div className= 'price'>
                    <p>Price</p>
                    <input type="number" placeholder='type here'></input>
                </div>
                <div class="file-upload">
                    <p>Upload</p>
                    
                    <label>
                         
                        <div><img src={uploadicon} alt="My Image" />
                        <span>{selectedFile ? selectedFile.name : 'Select a file'}</span></div>
                        <input type="file" onChange={handleFileInputChange} accept="image/*"/>
                        
                    </label>
                </div>
                <div className= 'additem'>
                    <button>
                        <img src={addicon} alt="My Image" />
                        <span>ADD ITEM</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default AddItem;
