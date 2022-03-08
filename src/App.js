import Header from "./Components/Header/Header";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import "./App.css";

function App() {
  const fetchLocationHandler = async () => {
    let apiUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      "Dublin" +
      "&limit=1&appid=858d2ac1d226880ff65be3ab6336fd05";

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
  };

  const getWeatherData = async (lat, lon, loc) => {
    let unitType = localStorage.getItem("saved-units" || "imperial");
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=" +
      unitType +
      "&appid=858d2ac1d226880ff65be3ab6336fd05";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <button onClick={fetchLocationHandler}>GetLoc</button>
      <WeatherContainer />
    </div>
  );
}

export default App;
