import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../Component/Products/productSlice'


export default configureStore({
  reducer: {
    product: productSlice,
  }
})

