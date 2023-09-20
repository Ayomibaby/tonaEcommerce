import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Signup, login, logout } from "../api/apicalls";

export const CreateNewUser = createAsyncThunk("Auth/register", async(data)=>{
    const response = await Signup(data);

    return response
});

export const logUserIn = createAsyncThunk("Auth/login", async(data)=>{
    const response = await login(data);

    return response
})

export const Loguserout = createAsyncThunk("Auth/logout", async()=>{
    const response = await logout();

    return response
})

export const authSlice = createSlice({
    name: "Auth",
    initialState: {},
    reducers:{

    }, 
    extraReducers:(builder)=>{
        builder 
        .addCase(CreateNewUser.pending, (state)=>{

        })
        .addCase(CreateNewUser.fulfilled, (state, {payload})=>{
            
        })
        .addCase(CreateNewUser.rejected, (state, {payload})=>{
            
        })
    }
})