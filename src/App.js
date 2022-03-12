import { useCallback, useState } from "react";
// Components
import Header from "./Components/Header/Header";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import LocationSidebar from "./Components/LocationSidebar/LocationSidebar";
import "./App.css";

function App() {
  const [returnedLoc, setReturnedLoc] = useState("");
  const [weatherData, setWeatherData] = useState({
    current: {
      dt: "",
      sunrise: "",
      sunset: "",
      temp: "",
      feels_like: "",
      humidity: "",
      dew_point: "",
      uvi: "",
      wind_speed: "",
      wind_deg: "",
      weather: [
        {
          id: "",
          main: "",
          description: "",
          icon: "",
        },
      ],
    },
    daily: [],
  });

  // query for lat and lon coordinates using location
  const fetchLocationHandler = useCallback(async (enteredLocation) => {
    let apiUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      `${enteredLocation}` +
      "&limit=1&appid=858d2ac1d226880ff65be3ab6336fd05";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const data = await response.json();
      if (data.length !== 0) {
        // store location name
        setReturnedLoc(data[0].name);

        // use lat & lon for call to retrieve weather
        const lat = data[0].lat;
        const lon = data[0].lon;

        getWeatherData(lat, lon);
      } else {
        alert("Unable to retrieve location");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // query to retrieve weather data for given location
  const getWeatherData = async (lat, lon) => {
    let unitType = "";
    if (JSON.parse(localStorage.getItem("saved-units"))) {
      unitType = JSON.parse(localStorage.getItem("saved-units"));
    } else unitType = "imperial";

    let apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=" +
      unitType +
      "&exclude=minutely,hourly,alerts" +
      "&appid=858d2ac1d226880ff65be3ab6336fd05";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const weatherData = await response.json();
      setWeatherData(weatherData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <LocationSidebar updateLocation={fetchLocationHandler} />
          <WeatherContainer weatherData={weatherData} location={returnedLoc} />
        </div>
      </div>
    </div>
  );
}

export default App;
