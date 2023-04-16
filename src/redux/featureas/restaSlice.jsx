import { createSlice } from "@reduxjs/toolkit";
import { restaurants } from "./restaurants";

const initialState = {
    resta_ar:[],

}

const restaSlice = createSlice({
    name:"restaurants",
    initialState,
    reducers:{


      getRestaurants:(state, action) =>{
        const resta = localStorage.getItem('resta')
        state.resta_ar = resta ? JSON.parse(resta) : restaurants },
      
      addResta:(state, action)=>{
        const restaObj = action.payload;
        restaObj.id = Date.now();
        
        state.resta_ar.push(restaObj);
        saveInLocalStorage(state.resta_ar)}

    }
    
})


const saveInLocalStorage = (resta_ar) => {
  localStorage.setItem('resta', JSON.stringify(resta_ar));
}


export const { getRestaurants, addResta } = restaSlice.actions;
export default restaSlice.reducer;


