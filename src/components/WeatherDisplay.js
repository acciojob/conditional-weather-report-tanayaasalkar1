import React, { useState } from "react";
import './../styles/App.css';


const App = ({weatherDetails}) => {
  const tempColor = weatherDetails.temperature > 20 ? "red" : "blue"

  return (
    <div>
      {/* Do not remove the main div */}
     <p >
       Temperature: <span style={{ color: temperatureColor }}>
          {weatherDetails.temperature}
        </span>
     </p>
           <p>
        Conditions: {weatherDetails.conditions}
      </p>
    </div>
  );
};

export default WeatherDisplay;
