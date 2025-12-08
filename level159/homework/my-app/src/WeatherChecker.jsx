import { useState, useEffect } from "react";

function WeatherChecker() {
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (temperature > 35 && city.length >= 3) {
      console.log("Heat Alert in", city);
    } else if (temperature < 5) {
      console.log("Cold Alert in", city);
    } else {
      console.log("Weather normal");
    }
  }, [temperature, city]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather Checker</h2>
      <input
        type="number"
        placeholder="Enter temperature"
        value={temperature}
        onChange={(e) => setTemperature(Number(e.target.value))}
      />
      <br /><br />
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default WeatherChecker;
