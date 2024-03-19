import { configureStore } from '@reduxjs/toolkit';
import getJobsSlice from '../state-slice/getJobs-slice';
import getRejectedSlice from '../state-slice/rejected-slice';

const store = configureStore({
  reducer: {getNewJob:getJobsSlice, getRejected:getRejectedSlice}
})

export default store