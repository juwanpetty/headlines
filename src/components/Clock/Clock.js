import React, { useState, useEffect } from "react";
import { Container } from "./Clock.module";

export const Clock = () => {
  const [date, setDate] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return <Container>{date}</Container>;
};
