import React, { useState } from "react";
import { Timer } from "./components/Timer/Timer";
import { Console } from "./components/ButtonConsole/ButtonConsole";
import { Context } from "./assets/hooks/useContext";

function App() {
  const [intervalValue, setIntervalValue] = useState(0);
  return (
    <Context.Provider value={{ intervalValue, setIntervalValue }}>
      <Timer />
      <Console />
    </Context.Provider>
  );
}

export default App;
