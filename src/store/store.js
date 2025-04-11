import { configureStore } from "@reduxjs/toolkit";
import wheatherReducer from "./weatherSlice/weatherSlice";
const store = configureStore({
  reducer: {
    weather: wheatherReducer,
  },
});

export default store;
