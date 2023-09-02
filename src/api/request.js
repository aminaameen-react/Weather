import axios from "axios";

const request = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  timeout: 60000,
});

export default request;
