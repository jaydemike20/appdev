import './index.css';
import 'boxicons'
import categories from '../../Data/data.js'



function SearchBar (props) {


    const uniqueCategories = categories.filter((value, index, self) =>
        index === self.findIndex((v) => v.category === value.category)
    );

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        props.onCategoryChange(selectedCategory);
    };

    return (

        <div className="container">
            <div className='insidecontainer'>
                {/* search bar */}
                <div className='searchbar'>
                    <input placeholder="Search... " />
                </div>
            

  
                <div className='categorybar' >                    
                <select defaultValue="All Categories"  onChange={handleCategoryChange}>
                    <option value={categories.category}>Categories</option>

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