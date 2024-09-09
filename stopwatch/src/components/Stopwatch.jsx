import React, { useState, useRef } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [clicked, setClicked] = useState(false);
  let intervalId = useRef(null);
  let time = useRef(null);

  function setTimeFormat() {
    let minutes = Math.floor(seconds / 60);
    let formattedSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  function handleClick(e) {
    setClicked((prev) => !prev);
    if (!clicked) {
      intervalId.current = setInterval(incrementSeconds, 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }

  function incrementSeconds() {
    setSeconds((prev) => prev + 1);
  }

  function handleReset(e) {
    clearInterval(intervalId.current);
    setSeconds(0);
    setClicked(false);
    intervalId.current = null;
  }

  return (
    <div>
      <p>Time: {setTimeFormat()}</p>
      <button onClick={(e) => handleClick(e)}>
        {clicked ? "stop" : "start"}
      </button>
      <button onClick={(e) => handleReset(e)}>Reset</button>
    </div>
  );
}

export default Stopwatch;
