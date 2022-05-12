import { configureStore } from "@reduxjs/toolkit";
import daysRecuder from "../reducers/daysSlice";

export default configureStore({
    reducer: {
        days: daysRecuder
    }
})