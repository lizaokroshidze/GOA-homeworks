import { useState, useEffect } from "react";

function ActivityTracker() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (count > 10 && isActive === true) {
      console.log("High activity");
    } else if (count <= 10 && isActive === false) {
      console.log("Low activity");
    } else {
      console.log("Normal state");
    }
  }, [count, isActive]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Activity Tracker</h2>
      <p>Count: {count}</p>
      <p>Active: {isActive ? "True" : "False"}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setIsActive(!isActive)}>Toggle Active</button>
    </div>
  );
}

export default ActivityTracker;
