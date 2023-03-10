
const storedProductData = localStorage.getItem('productData');

const ProductData = storedProductData ? JSON.parse(storedProductData) : [

]

// save product
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


function editProduct(code, newprice, newname) {

    const productIndex = ProductData.findIndex((product) => product.code === code);

    if (productIndex !== -1) {
        ProductData[productIndex].price = newprice || ProductData[productIndex].price;
        ProductData[productIndex].name = newname || ProductData[productIndex].name;
        saveProductData();
        window.location.reload();
    }


}

function deleteProduct(code) {
    const productIndex = ProductData.findIndex((product) => product.code === code);
    if (productIndex !== -1) {
        ProductData.splice(productIndex, 1);
        saveProductData();
        window.location.reload();
    }
}



export default ProductData;
export { addProduct, saveProductData, editProduct, deleteProduct };