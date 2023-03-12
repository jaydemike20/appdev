import Navbar from "../../Component/Navbar/index";
import React, {useState} from 'react'
import SearchBar from "../../Component/Searchbar";
import './index.css';
import ProductData, { editProduct } from '../../Data/data';
import products from '../../Data/data.js'
import { saveProductData } from "../../Data/data";

function EditItem() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDiv, setShowDiv] = useState(false);
    const [isCentered, setIsCentered] = useState(true);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');
    const [code, setCode] = useState('');

    const [data, setData] = useState({
        name: '',
        price: '',
        imgUrl: ''
    })


    // searchbar and category function

    const filteredProducts = products.filter(
        (product) =>
        (!selectedCategory || product.category === selectedCategory) && // filter by category
        (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase())) // filter by search term
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category === 'All Categories' ? null : category);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };







    const displayEdit = (img, name, price, code) =>{
        setShowDiv(true);
        setIsCentered(false);
        setImage(img);
        setName(name);
        setPrice(price);
        setCode(code);

    }
    const hideEdit = () =>{
        setShowDiv(false);
        setIsCentered(true);
    }
    function handleInput(event) {
        setContent(event.target.textContent);
    }




    const handleEditItem = () => {

        editProduct(code, data.price, data.name);
    
   


    }

    return(
        <div>
            <Navbar />
            <div className = "centered">
                <div className = "searchbarr">
                    <SearchBar onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
                </div>
            </div>
            <div style={{ transform: `translateX(${isCentered ? '20%' : '0'})`, transition: 'transform 0.5s ease-in-out'}}>
                <div className = "productsss">
                    <div className='rowww'>
                    {filteredProducts.map((value, index) => (
                        
                            <div className='columnnn' key={index}>
                                
                                <div className='carddd'>
                                
                                    <img src={value.img} style={{width: 100, height: 163}}  className="productimage" />            
                    
                                    <div className='containercarddd'>
                                        <h4>{value.name}</h4>
                                        <p> ₱{value.price}</p>
                                        <button onClick={() => displayEdit(value.img, value.name, value.price, value.code)} className='edit'>Edit</button>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                         
                </div>
                
            </div>
            {showDiv && 
                <div className="edititem">
                    
                            
                    <img src={image} style={{width: 150, height: 200}} />
                    <div className="editname">

                        <label className="namee">Name</label>
                        <input
                        className="nameinput"
                        placeholder={name}
                        value={data.name}
                        onChange={(event) => {
                            let d = data;

                            setData({...d, name: event.target.value})
                        }} 
                        />

                        {/* <p className="namee">Name</p>
                        <p className= "nameevalue"contentEditable={true} onInput={handleInput} value={name}>
                            {name}
                            </p> */}
                    </div>

                    <div className="editprice">


                        <label className="pricee">Price</label>

                        <input
                        className="nameinput"
                        type="number"
                        placeholder={price}
                        value={data.price}
                        onChange={(event) => {
                            let d = data;
                            setData({...d, price: event.target.value})
                        }} 
                        />



                        {/* <p className="pricee">Price</p>
                        <p className="priceevalue" contentEditable={true} onInput={handleInput} onChange={(event) => {
                            setPrice(event.target.value)
                        }}>
                            ₱{price}
                        </p> */}
   
                    </div>    


                    <div className="editbutton">
                        <button className="confirmm" onClick={handleEditItem}>Confirm</button>
                        <button onClick={() => hideEdit()} className="cancell">Cancel</button>
                    </div> 
                        
                </div>}         
            </div> 
            
        </div>
        
    );
}


export default EditItem;
