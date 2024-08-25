import React, { useContext } from "react";
import { Context } from "../../assets/hooks/useContext";
export const Console = () => {
  const { setIntervalValue } = useContext(Context);
  return (
    <div className="container">
      <button
        type="button"
        className="intervalBtn"
        onClick={() => {
          setIntervalValue(100);
        }}
      >
        100ms
      </button>
      <button
        type="button"
        className="intervalBtn"
        onClick={() => {
          setIntervalValue(500);
        }}
      >
        500ms
      </button>
      <button
        type="button"
        className="intervalBtn"
        onClick={() => {
          setIntervalValue(1000);
        }}
      >
        1s
      </button>
    </div>
  );
};
