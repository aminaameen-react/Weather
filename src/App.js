import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getForecast } from "../src/services/forecast.services";
import { selectForecast } from "../src/store/slice/forecast.slice";

function App() {
  const dispatch = useDispatch();
  const forecast = useSelector(selectForecast);

  const fun = (event) => {
    const city = event.target.value;
    const time = setTimeout(() => {
      dispatch(getForecast(city));
    }, 600);
    return () => {
      clearTimeout(time);
    };
  };

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          className="textInput"
          placeholder="Enter city"
          maxLength={50}
          onChange={fun}
        />
      </div>

      {!forecast.length ? (
        <div>Please enter a valid city!</div>
      ) : (
        <div className="result">
          {forecast?.map((current) => (
            <div>
              <div className="sun">
                <div className="box">
                  <h5> {current.date} </h5>

                  <h5> Max Temperature: {current.day.maxtemp_c}</h5>

                  <h5>Min Temperature: {current.day.mintemp_c}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
