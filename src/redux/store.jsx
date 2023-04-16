import { configureStore } from "@reduxjs/toolkit";
import restaReducer from "./featureas/slices";


const myStore = configureStore({
    reducer:{

        restaurants: restaReducer

    }
})