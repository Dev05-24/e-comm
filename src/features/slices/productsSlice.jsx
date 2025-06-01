import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummData';
import { retry } from '@reduxjs/toolkit/query';

export const productsSlice = createSlice({
    name : 'products',
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleProduct : JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        error : false,
        // we are trying to read "filteredData" from sessionStorage.
        // If "filteredData" exists, you parse the JSON string back to an array of products and set it as the initial filtered list.
        // If not then it defaults to the full storeData array, meaning no filter is applied initially.
    },
    reducers: {
        filterProducts(state, action) {
            try {
                // filter products by matching type with the action payload
                const filter = storeData.filter((product) => product.type === action.payload);
                // Update state with filtered results
                state.filteredProducts = filter;
                state.error = false;
                // console.log("filter", filter);
                 // Save the filtered data in sessionStorage as JSON string
                const savedState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", savedState);
            } catch (err) {
                return err; // Note: returning errors in reducers is not standard
            }
        },
        singleProduct(state, action){
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload);
                state.singleProduct = oneProduct;
                const savedState = JSON.stringify(oneProduct);
                sessionStorage.setItem("singleProduct", savedState);
                // console.log("oneProduct", oneProduct);
            } catch (error) {
                return Array;
            }
        },
        filterGender(state, action){
            try {
                const gender = state.filteredProducts.filter((product) => product.gender === action.payload);
                state.error = false;
                state.filteredProducts = gender;
                const oneGenderType = gender.length > 0;
                if(oneGenderType){
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.setItem("filteredData",saveState);
                }else{
                    state.error = true;
                    state.filteredProducts = [];
                }
            } catch (err) {
                return err
            }
        },
        sortByPrice(state, action){
            try {
                const price = state.filteredProducts.sort((a,b) => 
                    a.price > b.price ? -1 : 1
                );
                state.filteredProducts = price;
                let count = price.length;
                if(count > 1){
                    const noError = false;
                    state.error = noError;
                    if(!noError){
                        state.filteredProducts = price;
                        const saveState = JSON.stringify(price);
                        sessionStorage.setItem('filteredData', saveState);
                    }else{
                        state.error = true;
                        state.filteredProducts = [];
                    }
                }
            } catch (err) {
                return err;
            }
        }
        ,filterByColor(state, action){
            try {
                const color = state.filteredProducts.filter((product) => product.color.includes(action.payload));
                state.error = false;
                state.filteredProducts = color;
                if(color.length <= 0){
                    state.error = true;
                    state.filteredProducts = [];
                }else{
                    state.error = false;
                    state.filteredProducts = color;
                    const saveState = JSON.stringify(color);
                    sessionStorage.setItem("filteredProducts", saveState);
                }
            } catch (err) {
                return err;
            }
        },
        filterBySize(state, action){
            try {
                const size = state.filteredProducts.filter((product) => product.size.includes(action.payload));
                state.error = false;
                state.filteredProducts = size;
                if(size.length <= 0){
                    state.error = true;
                    state.filteredProducts = [];
                }else{
                    state.error = false;
                    state.filteredProducts = size;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem("filteredProducts", saveState);
                }
            } catch (err) {
                return err;
            }
        }
    },
});

export const { filterProducts, singleProduct, filterGender, sortByPrice, filterByColor, filterBySize } = productsSlice.actions;
export default productsSlice.reducer;