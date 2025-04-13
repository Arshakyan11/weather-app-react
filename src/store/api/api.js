import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notifyforError, notifyforFinding } from "../../helpers/notifyUser";

export const requestData = createAsyncThunk(
  "weather/requestData",
  async (queryRcv, { rejectWithValue }) => {
    try {
      const response = await axios({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${queryRcv}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      }).then((res) => res.data);
      notifyforFinding();
      return {
        data: response,
        query: queryRcv,
      };
    } catch (error) {
      notifyforError()
      return rejectWithValue(
        `${queryRcv} Not Found, Pls try to search Another City/Country`
      );
    }
  }
);

export const requestWeeklyData = createAsyncThunk(
  "weather/requestWeeklyData",
  async (queryRcv, { rejectWithValue }) => {
    try {
      const response = await axios({
        baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${queryRcv}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      }).then((res) => res.data.list);
      return response;
    } catch (error) {
      return rejectWithValue(
        `${queryRcv} Not Found, Pls try to search Another City/Country`
      );
    }
  }
);
