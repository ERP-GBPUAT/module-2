import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:null,
    token:null,   
    page:0
};   

export const authSlice=createSlice({
    name:"auth",
    initialState, 
    reducers:{   
      setPage:(state,action)=>{
         state.page=action.payload.page;
      },
      setLogout:(state)=>{
          state.user=null;
          state.token=null;
      }
    }
});  

export const { setLogout }=authSlice.actions;      

export default authSlice.reducer;