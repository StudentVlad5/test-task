import React, { useCallback, useState, memo } from "react";

export const FancyBatton = memo(({ onClick, children }) => {
  return (
    <button className="fancy-button" onClick={onClick}>
      {children}
    </button>
  );
});

export const ComponentFancy = () => {
  const [visible, setVisible] = useState(false);

  const handlClick = useCallback(() => {
    setVisible((currentValue) => !currentValue);
  }, [setVisible]);

  return (
    <dic className="container">
      <h2>What is React?</h2>
      <FancyBatton onClick={handlClick}>Toggle</FancyBatton>
      {visible && <p>ANSWER</p>}
    </dic>
  );
};
