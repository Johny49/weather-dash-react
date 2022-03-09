import { useCallback, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import "./App.css";
import LocationSidebar from "./Components/LocationSidebar/LocationSidebar";

function App() {
  const [weatherData, setWeatherData] = useState({});

  const fetchLocationHandler = useCallback(async (enteredLocation) => {
    let apiUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      `${enteredLocation}` +
      "&limit=1&appid=858d2ac1d226880ff65be3ab6336fd05";
    console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const data = await response.json();
      if (data.length !== 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;
        const loc = data[0].name;
        getWeatherData(lat, lon, loc);
      } else {
        alert("Unable to retrieve location");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const getWeatherData = async (lat, lon, loc) => {
    let unitType = localStorage.getItem("saved-units" || "imperial");
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=" +
      "&exclude=minutely,hourly,alerts" +
      unitType +
      "&appid=858d2ac1d226880ff65be3ab6336fd05";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const data = await response.json();
      setWeatherData(data);
      return { loc, data };
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row py-4">
          <LocationSidebar updateLocation={fetchLocationHandler} />
          <WeatherContainer weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
