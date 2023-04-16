import { configureStore } from "@reduxjs/toolkit";
import restaReducer from "./featureas/restaSlice";
import counterReducer from "./featureas/counterSlice";


const myStore = configureStore({
    reducer:{

        restaReducer: restaReducer,
        counterReducer: counterReducer

    }
})


export default myStore