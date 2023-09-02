import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [city, setCity] = useState("");

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 30);
      }
    }
  }

  const fun = (event) => {
    setCity(event.target.value);
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&key=08dd6b64a84741fc8cb70125232408`
      )
      .then((response) => {
        setList(response.data.forecast.forecastday);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          className="textInput"
          placeholder="Enter city"
          value={city}
          maxLength={50}
          onChange={fun}
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="result">
          {list?.map((current) => (
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
