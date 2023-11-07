import { useState } from "react";

export default function App() {
  const [location, setLocation] = useState("lisbon");

  function handleFetchWeather() {
    console.log("Loading Data...");
    console.log(this);
  }
  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <input
        type="text"
        placeholder="Search from location ..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Get Weather</button>
    </div>
  );
}
