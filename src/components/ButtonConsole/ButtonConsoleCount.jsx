import React, { useContext } from "react";
import { Context } from "../../assets/hooks/useContext";
export const ConsoleCount = () => {
  // const { setCountValue } = useContext(Context);
  const { dispatch } = useContext(Context);
  return (
    <div className="container">
      <button
        type="button"
        className="mathBtn"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        type="button"
        className="mathBtn"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        className="mathBtn"
        onClick={() => {
          dispatch({ type: "reset", payload: 1 });
        }}
      >
        Reset
      </button>
    </div>
  );
};
