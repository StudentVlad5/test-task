import React, { useState, useMemo } from "react";

const checkIsPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const IsPrimeChecer = ({ num, isPrime }) => {
  console.log("num", num);
  return <span>{`${num} is ${isPrime ? "prime" : "not prime"}`}</span>;
};

export const PrimeNumUseMemo = () => {
  const [visible, setVisible] = useState(false);
  const [num, setNum] = useState(1);
  const isPrime = useMemo(() => checkIsPrime(num), [num]);

  const handlClick = () => {
    setVisible((currentValue) => !currentValue);
  };
  const handlIncrement = () => {
    setNum((currentNum) => currentNum + 1);
  };

  return (
    <div className="container">
      <h2>What is React?</h2>
      <button type="button" onClick={handlClick}>
        Show
      </button>
      <button type="button" onClick={handlIncrement}>
        Next num
      </button>
      {visible && <p>{IsPrimeChecer({ num, isPrime })}</p>}
    </div>
  );
};
