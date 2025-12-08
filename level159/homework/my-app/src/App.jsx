import EmailPassword from "./EmailPassword";
import ActivityTracker from "./ActivityTracker";
import WeatherChecker from "./WeatherChecker";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <hr />

      <EmailPassword />
      <hr />

      <ActivityTracker />
      <hr />

      <WeatherChecker />
    </div>
  );
}

export default App;
