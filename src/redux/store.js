import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../Component/Products/productSlice'
import { setTotalSales } from '../Component/Products/productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
  }
})




// Listen for changes to local storage and update the Redux store
window.addEventListener("storage", (event) => {
  if (event.key === "totalSales") {
    const totalSales = event.newValue ? parseInt(event.newValue) : 0;
    store.dispatch(setTotalSales(totalSales));
  }
});



export default store;
