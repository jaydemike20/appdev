import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        totalsales: '',
        total: 0,
        quantity: 0,
        payment: [],

    }, 
    reducers: {
        increment: (state, action) => {

            const itemIndex = state.payment.findIndex(
                (item) => item.code === action.payload.code
            );

            if (itemIndex >= 0) {
                state.payment[itemIndex].qty += 1
            } else {
                const tempProduct = {...action.payload, quantity: 1}
                state.payment.push(tempProduct)    
            }

                  // Calculate total price
            const totalPrice = state.payment.reduce(
                (total, item) => total + item.price * item.qty,
                0
            );
            state.total = totalPrice;
            state.quantity += 1;


        },
        decrement: (state, action) => {
            const itemIndex = state.payment.findIndex(
              (item) => item.code === action.payload.code
            );
          
            if (itemIndex >= 0) {
              const itemQty = state.payment[itemIndex].qty;
              if (itemQty > 1) {
                state.payment[itemIndex].qty -= 1;
              } else {
                // Remove item from payment array if qty is 1 or less
                state.payment.splice(itemIndex, 1);
              }
                // Calculate total price
                const totalPrice = state.payment.reduce(
                    (total, item) => total + item.price * item.qty,
                    0
                );
                state.total = totalPrice;
                state.quantity -= 1;
        
                    }




        },
        resetValues: (state) => {
            state.payment = []
            state.total = 0;
            state.quantity = 0;
        },

    },
});


export const { increment, decrement, resetValues } = productSlice.actions;

export default productSlice.reducer;

