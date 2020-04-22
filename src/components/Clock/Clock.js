import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { clockSelector } from "../../store/slices/clock";
import { Container } from "./Clock.module";

export const Clock = () => {
  const { timeFormat } = useSelector(clockSelector);
  const isTimeFormat12Hour = timeFormat === "12" ? true : false;
  const [date, setDate] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: isTimeFormat12Hour,
    })
  );

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: isTimeFormat12Hour,
      })
    );
  };

  return <Container>{date}</Container>;
};
