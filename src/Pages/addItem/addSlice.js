import { createSlice } from "@reduxjs/toolkit";


const addSlice = createSlice({
    name: 'additem',
    initialState: {
        initialItem: {
            code: '',
            name: '',
            qty: 1,
            img: '',
            category: ''
        },
        products: [
        {
            code: 'empi1',
            name: 'Emperador Light',
            qty: 1,
            price: 150,
            img: 'https://www.nicepng.com/png/detail/815-8159505_emperador-light-brandy-1l-cruzan-single-barrel-bottle.png',
            category: 'Liquor'
        },
    ],
    },
    reducers: {
        setAddItem: (state, actions) => {
            state.initialItem = actions.payload

            state.products.push(state.products)
        }
    }
})

export const {setAddItem} = addSlice.actions;

export default addSlice.reducer;