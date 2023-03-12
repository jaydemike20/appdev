import 'boxicons';
import './index.css';
import { NavLink } from 'react-router-dom';
export default function Navbar() {

    return(
        <div className='banner'>
            <div className="title">
                <box-icon 
                name='store-alt' 
                type="logo"  
                color="#FD841F" 
                size='lg' 
                animation='spin-hover' 
                ></box-icon>
                <h1>Sari-Sari Store</h1>
            </div>

            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to='/Dashboard'>
                            <box-icon  
                            type='solid' 
                            name='dashboard' 
                            color="#16FF00" 
                            size="sm" 
                            animation='burst-hover'
                            ></box-icon>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/AddItem'>
                            <box-icon 
                            name='cart-add' 
                            type='solid' 
                            color="#8BF5FA" 
                            size="sm" 
                            animation='burst-hover' 
                            ></box-icon>
                            Add Item
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/EditItem'>
                            <box-icon 
                            type='solid' 
                            name='edit' 
                            color="#FFB84C" 
                            size="sm" 
                            animation='burst-hover'
                            ></box-icon>
                            Edit Item
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/DeleteItem'>
                            <box-icon 
                            name='trash'
                            color='#F94A29' 
                            size="sm" 
                            animation='burst-hover' 
                            ></box-icon>
                            Delete Item
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )

}