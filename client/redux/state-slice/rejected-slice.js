import { createSlice } from '@reduxjs/toolkit'

export const getRejectedSlice = createSlice({
  name: 'rejected',
  initialState: {
    rejected:[],
  },

  reducers: {
    setRejected:(state, action)=>{
        state.rejected=action.payload
    }
  },
})

export const {setRejected} = getRejectedSlice.actions
export default getRejectedSlice.reducer;