import './index.css';
import 'boxicons';
import categories from '../../Data/data.js';
import { useState } from 'react';

function SearchBar(props) {
  const uniqueCategories = categories.filter(
    (value, index, self) => index === self.findIndex((v) => v.category === value.category)
  );

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    props.onCategoryChange(selectedCategory);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    props.onSearchChange(term);
  };

  return (
    <div className="container">
      <div className="insidecontainer">
        {/* search bar */}
        <div className="searchbar">
          <input placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
        </div>

        <div className="categorybar">
          <select defaultValue="All Categories" onChange={handleCategoryChange}>
            <option value={categories.category}>All Categories</option>
            {uniqueCategories.map((value, index) => (
              <option key={index}>{value.category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;