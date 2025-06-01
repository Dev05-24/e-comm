import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        cart : [],
        amount : 0,
        totalAmount : 0,
        totalPrice : 0
    },
    reducers : {
        addToCart(state, action){
            const productId = action.payload;
            try {
                const exist = state.cart.find((product) =>
                    product.id === productId.id &&
                    product.size === productId.size &&
                    product.color === productId.color
            );
            const itemPrice = Number(productId.price);
            if(exist){
                exist.amount++;
                exist.totalPrice += itemPrice;
            }else{
                state.cart.push({
                    id : productId.id,
                    name : productId.name,
                    img : productId.img,
                    text : productId.text,
                    size : productId.size,
                    color : productId.color,
                    amount : 1,
                    price : itemPrice,
                    totalPrice : itemPrice,
                });
            }
                state.totalAmount++;
                state.totalPrice += itemPrice;
            } catch (error) {
                console.error("Add to cart error : ", error);
            }
        },
        removeFromCart(state, action){
            const productId = action.payload;
            try {
                const exist = state.cart.find((product) =>
                    product.id === productId.id &&
                    product.size === productId.size &&
                    product.color === productId.color
                )
                const itemPrice = Number(productId.price);

                if(exist){
                    if(exist.amount === 1){

                        state.cart = state.cart.filter(
                            (product) => 
                                product.id !== productId.id || 
                            product.size !== productId.size ||
                            product.color !== productId.color
                        );
                    }else{
                        exist.amount--;
                        exist.totalPrice -= itemPrice;
                    }
                    state.totalAmount--;
                    state.totalPrice -= itemPrice;
                }               
            } catch (error) {
                console.error("Remove from cart error : ",error);
            }
        }
    }
})
export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;