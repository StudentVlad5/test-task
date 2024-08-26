import React, { useState, useReducer } from "react";
import { Timer } from "./components/Timer/Timer";
import { ConsoleTimer } from "./components/ButtonConsole/ButtonConsoleTimer";
import { Context } from "./assets/hooks/useContext";
import { Counter } from "./components/Counter/Counter";
import { ConsoleCount } from "./components/ButtonConsole/ButtonConsoleCount";
import { ComponentFancy } from "./components/FancyCallBack/FancyCallBack";
import { PrimeNumUseMemo } from "./components/PrimeNumUseMemo/PrimeNumUseMemo";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };
    default:
      return state;
  }
};

function App() {
  const [intervalValue, setIntervalValue] = useState(0);
  const [statusTimer, setStatusTimer] = useState(false);
  // const [countValue, setCountValue] = useState(1);

  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <Context.Provider
      value={{
        intervalValue,
        setIntervalValue,
        statusTimer,
        setStatusTimer,
        state,
        dispatch,
      }}
    >
      <Timer />
      <ConsoleTimer />
      <Counter />
      <ConsoleCount />
      <ComponentFancy />
      <PrimeNumUseMemo />
    </Context.Provider>
  );
}

export default App;
