import React, { useContext } from "react";
import clsx from "clsx";
import { Context } from "../../assets/hooks/useContext";
export const ConsoleTimer = () => {
  const { setIntervalValue, setStatusTimer, statusTimer } = useContext(Context);
  return (
    <div className="container">
      <button
        type="button"
        className="intervalBtn"
        onClick={() => {
          setStatusTimer(true);
          setIntervalValue(100);
        }}
      >
        100ms
      </button>
      <button
        type="button"
        className="intervalBtn"
        onClick={() => {
          setStatusTimer(true);
          setIntervalValue(500);
        }}
      >
        500ms
      </button>
      <button
        type="button"
        className="intervalBtn"
        onClick={() => {
          setStatusTimer(true);
          setIntervalValue(1000);
        }}
      >
        1s
      </button>
      <button
        type="button"
        className={clsx("intervalBtn", statusTimer ? "stop" : "start")}
        onClick={() => {
          setStatusTimer((statusTimer) => !statusTimer);
        }}
      >
        {statusTimer ? "stop" : "start"}
      </button>
    </div>
  );
};
