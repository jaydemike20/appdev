import logo from '../images/empi.png'
import soap from '../images/soap.png'
import canton from '../images/canton.jpeg'
import luckymebeef from '../images/lmbeef.jpeg'
import { useDispatch } from 'react-redux'


const storedProductData = localStorage.getItem('productData');

const ProductData = storedProductData ? JSON.parse(storedProductData) : [

]


function saveProductData() {
    localStorage.setItem('productData', JSON.stringify(ProductData));
}

// function for adding a new product

function addProduct(code, name, qty, price, img, category) {
    const newProduct = {code, name, qty, price, img, category};
    ProductData.push(newProduct);
    saveProductData();
    window.location.reload();
}

export default ProductData;
export { addProduct, saveProductData };