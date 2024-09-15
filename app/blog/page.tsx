"use client";
import React, { useState, useCallback } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(10);

  // useCallback will return a memoized version of the increment function
  // const increment = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  const increment = () => {
    setCount((prevCount) => prevCount - 1);
  };

  console.log("Rendering counter");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <h2>Other Value: {otherValue}</h2>
      <button onClick={() => setOtherValue(otherValue + 1)}>
        Increment Other Value
      </button>
    </div>
  );
};

export default Counter;
