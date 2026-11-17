
import React, {useState} from "react";
import './../styles/App.css';
 const [weatherDetails, setWeatherDetails] = useState({
    temperature: 25,
    conditions: "Sunny"
  });
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weatherDetails={weatherDetails}/>
    </div>
  )
}

export default App
