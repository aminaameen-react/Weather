import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const forecastSlice = createSlice({
  initialState: initialState,
  name: "forecast",
  reducers: {
    setForecastData: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { setForecastData } = forecastSlice.actions;

export default forecastSlice.reducer;

const selectForecast = (state) => state.forecast.data.forecast.forecastday;

export { selectForecast };
