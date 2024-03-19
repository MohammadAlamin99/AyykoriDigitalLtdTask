import { createSlice } from '@reduxjs/toolkit'

export const getJobsSlice = createSlice({
  name: 'newJob',
  initialState: {
    newJob:[],
  },

  reducers: {
    setNewJob:(state, action)=>{
        state.newJob=action.payload
    }
  },
})

export const {setNewJob} = getJobsSlice.actions
export default getJobsSlice.reducer;