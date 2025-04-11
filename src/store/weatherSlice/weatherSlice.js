import { createSlice } from "@reduxjs/toolkit";
import { requestData, requestWeeklyData } from "../api/api";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    queryName: null,
    currentWeather: [],
    weeklyWeather: [],
    dailyWeather: [],
    isLoadingCurrent: false,
    errorCurrent: null,
    isLoadingOthers: null,
    errorOthers: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestData.pending, (state, action) => {
      state.isLoadingCurrent = true;
    });
    builder.addCase(requestData.fulfilled, (state, action) => {
      const res = action.payload;
      state.currentWeather = [res.data];
      state.queryName = res.query;
      state.isLoadingCurrent = false;
    });
    builder.addCase(requestData.rejected, (state, action) => {
      state.isLoadingCurrent = false;
      state.errorCurrent = action.payload;
    });
    builder.addCase(requestWeeklyData.pending, (state, action) => {
      state.isLoadingOthers = true;
    });
    builder.addCase(requestWeeklyData.fulfilled, (state, action) => {
      state.isLoadingOthers = false;
      state.dailyWeather = action.payload.slice(0, 5);
      let newArray = [];
      let eachDay = {};
      action.payload.forEach((elm) => {
        const forecastedDay = elm.dt_txt.split(" ")[0];
        if (!eachDay[forecastedDay]) {
          eachDay[forecastedDay] = true;
          newArray.push(elm);
          state.weeklyWeather = newArray;
        }
      });
    });
    builder.addCase(requestWeeklyData.rejected, (state, action) => {
      state.isLoadingOthers = false;
      state.errorOthers = action.payload;
    });
  },
  selectors: {
    getQueryName: (state) => state.queryName,
    getCurrentWeather: (state) => state.currentWeather,
    getWeeklyWeather: (state) => state.weeklyWeather,
    getDailyWeather: (state) => state.dailyWeather,
    getGlobalWeather: (state) => state,
  },
});

export const {
  getQueryName,
  getCurrentWeather,
  getWeeklyWeather,
  getDailyWeather,
  getGlobalWeather,
} = weatherSlice.selectors;
export default weatherSlice.reducer;
