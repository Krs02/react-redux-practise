import React, { useEffect, useRef, useState } from "react";

function Info() {
  const [currentTime, setCurrentTime] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
    console.log("first load only", counter);
    setTicker();
    return () => {
      // todo
    };
  }, []);
  useEffect(() => {
    counter.current = counter.current + 5;
    console.log("execute All the time", counter);
  });
  useEffect(() => {
    counter.current = counter.current + 5;
    console.log("Execute on randomIndex", counter);
    if (counter.current > 30) {
      clearInterval(timer);
    }
    return;
  }, [randomIndex]);

  const setTicker = () => {
    const temp = setInterval(() => {
      setRandomIndex(getRandomInteger(1, 10));
      setCurrentTime(new Date().toString());
    }, 2000);
    setTimer(temp);
  };

  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  return (
    <div className="info">
      <div className="main_container">
        <h1>
          {randomIndex} - {currentTime}
        </h1>
        <h3>What is Lorem Ipsum?</h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <h3>Why do we use it?</h3>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </div>
    </div>
  );
}
export default Info;
