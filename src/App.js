import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [city,setCity]=useState('');
    
  const fun = event => {
    setCity(event.target.value);
    
    axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&key=08dd6b64a84741fc8cb70125232408`)
    .then(response => {
      setList(response.data.forecast.forecastday);
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });  
  }
  return (
    <div className="App">
          <div className="input">

      <input
      type='text'
      className='textInput'
      placeholder='Enter city'
      value={city}
      maxLength={50}
      onChange={fun}
      />
               </div>

       <div className="result">
       {list?.map((current) => <div>
  <div className="sun">

      <div className="box">
     <h5>  {current.date} </h5>
      
      <h5> Max Temperature: {current.day.maxtemp_c}</h5>
    
      <h5>Min Temperature: {current.day.mintemp_c}</h5>
       </div>
    
    
  </div>
  
</div>)}
       </div>


    </div>
  );
}

export default App;
