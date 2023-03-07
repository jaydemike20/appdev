import './products.css';
import 'boxicons';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addItemPlus, decrement, deleteItem, increment } from './productSlice';
import { useState } from 'react';
import SearchBar from '../Searchbar';
import products from '../../Data/data.js';

function Products(props) {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.product.payment);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="container1">
      <div className="searchbar1">
        <SearchBar onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="column" key={product.id}>
            <div className="card">
              <img src={product.img} style={{ width: 100, height: 163 }} className="productimage" />

              <div className="containercard">
                <h4>{product.name}</h4>
                <p>₱{product.price.toFixed(2)}</p>

                <button
                  className="minus"
                  onClick={() => {
                    dispatch(decrement(product));
                  }}
                >
                  -
                </button>

                                <button className='plus' onClick={() => {

                                    dispatch(increment(product));


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
