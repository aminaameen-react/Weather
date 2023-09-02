const initialState = {
  forecast: {
    status: false,
    data: {
      location: {},
      current: {},
      forecast: {
        forecastday: [],
      },
    },
  },
};

export default initialState;
