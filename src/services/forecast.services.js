import { fetchForecast } from "../api/forecast.api";
import { setForecastData } from "../store/slice/forecast.slice";
import initialState from "../store/initialState";

export const getForecast = (data) => {
  return (dispatch) => {
    fetchForecast(data)
      .then((res) => {
        if (res.status == 200 && res.data) {
          dispatch(setForecastData({ status: true, data: res.data }));
        } else {
          console.log("No data available yet.");
          dispatch(
            setForecastData({
              ...initialState.forecast,
              status: false,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err?.response?.message || "Something Went Wrong.");
        dispatch(
          setForecastData({
            ...initialState.forecast,
            status: false,
          })
        );
      });
  };
};
