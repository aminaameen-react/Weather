import request from "./request";

export const fetchForecast = (data) => {
  return request.get(
    `forecast.json?key=08dd6b64a84741fc8cb70125232408&days=7&q=${data || ""}`
  );
};
