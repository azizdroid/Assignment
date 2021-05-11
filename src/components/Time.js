import React, { useState } from "react";

function Time() {
  const [currenttime, updatedttime] = useState();
  const update = () => {
    let time = new Date().toLocaleTimeString();
    updatedttime(time);
  };
  setInterval(update, 1000);
  return (
    <div>
      <h1>TIME: {currenttime}</h1>
    </div>
  );
}

export default Time;
