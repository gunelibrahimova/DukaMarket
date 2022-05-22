import { createSlice } from "@reduxjs/toolkit";
import { GET } from "../../api/services";

export const daysSlice = createSlice({
    name: 'days',
    initialState:{
        data : []
    },
    reducers: {
        daysData : (state , action) =>{

            const product = GET("product/productlist")
            state.data = product
        }
    }


})

export const {daysData} = daysSlice.actions

export default daysSlice.reducer;