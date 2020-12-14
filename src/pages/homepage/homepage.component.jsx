import React from "react";
import Weather from "../../components/weather/weather.component";

const HomePage = () => {
  return (
    <div className="page homepage center-content">
      <div className="app-container">
        <Weather />
      </div>
    </div>
  );
};

export default HomePage;
