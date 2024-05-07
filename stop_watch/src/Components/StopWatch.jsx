import React, { useState, useEffect } from "react";
import "./StopWatch.css";

function StopWatch() {
  // State variables for managing time value and running state
  const [timeValue, setTimeValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect hook to handle starting and stopping the timer
  useEffect(() => {
    let intervalId; // Declare a variable to hold the interval ID

    // If the stopwatch is running, start the interval to update time value
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeValue((prev) => prev + 1); // Increment time value by 1 every second
      }, );   //(1sec maine remove krdiya) Interval set to 1000 milliseconds (1 second)
    } else {
      // If the stopwatch is not running, clear the interval
      clearInterval(intervalId);
    }

    // Clean-up function to clear the interval when component unmounts or state changes
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]); // Run this effect whenever isRunning changes

  // Function to format the time value into HH:MM:SS format
  const formattedValue = () => {
    const sec = Math.floor(timeValue % 60);
    const min = Math.floor((timeValue / 60) % 60);
    const hour = Math.floor(timeValue / 3600);

    return `${hour.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  // Event handler to start the stopwatch
  const startHandler = () => {
    setIsRunning(true); // Set isRunning to true
  };

  // Event handler to stop the stopwatch
  const stopHandler = () => {
    setIsRunning(false); // Set isRunning to false
  };

  // Event handler to reset the stopwatch
  const resetHandler = () => {
    setIsRunning(false); // Set isRunning to false
    setTimeValue(0); // Reset the time value to 0
  };

  // JSX to render the stopwatch component
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <p>
            <span className="time">{formattedValue(timeValue)}</span>
          </p>
          {""}
          <button className="btn-start" onClick={startHandler}>
            Start
          </button>
          <button className="btn-stop" onClick={stopHandler}>
            Stop
          </button>
          <button className="btn-reset" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
