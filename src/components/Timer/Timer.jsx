import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../assets/hooks/useContext";

export const Timer = () => {
  const [value, setValue] = useState(0);
  const { intervalValue, statusTimer } = useContext(Context);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => prev + 1);
    }, intervalValue);
    if (!statusTimer) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalValue, statusTimer]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
    </div>
  );
};
