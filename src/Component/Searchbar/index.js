import './index.css';
import 'boxicons'




function SearchBar () {


    return (

        <div className="container">


            <div className='insidecontainer'>

                {/* search bar */}
                <div className='searchbar'>
                    <input placeholder="Search... " />

                </div>

                <div className='categorybar'>
                    <select defaultValue="Categories">
                        <option disabled>Categories</option>
                        <option value="Liquor" >Liquor</option>
                        <option value="Goods">Can Goods</option>
                        <option value="All">All</option>
                    </select>

                </div>


            </div>






        </div>

    );

}




export default SearchBar;