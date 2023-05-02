import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducers/index"
 export default   configureStore({
    reducer:rootReducers,
    devTools:true,
 });