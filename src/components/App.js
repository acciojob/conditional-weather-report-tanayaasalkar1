
import React, {useState} from "react";
import './../styles/App.css';
const weatherDetails = { temperature: 25, conditions: "Sunny" }
  // const [weatherDetails, setWeatherDetails] = useState(weatherDetails);
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weatherDetails={weatherDetails}/>
    </div>
  )
}

export default App
