import React, { useContext } from "react";
import { Context } from "../../assets/hooks/useContext";

export const Counter = () => {
  const { state } = useContext(Context);
  // const { countValue } = useContext(Context);

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>{state.count}</h2>
    </div>
  );
};
