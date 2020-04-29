import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { clockSelector } from "../../store/slices/clock";
import { Container, TimeText, DateText } from "./Clock.module";

export const Clock = () => {
  const { timeFormat } = useSelector(clockSelector);
  const isTimeFormat12Hour = timeFormat === "12" ? true : false;
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: isTimeFormat12Hour,
    })
  );
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  );

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setTime(
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: isTimeFormat12Hour,
      })
    );

    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    );
  };

  return (
    <Container>
      <TimeText>{time}</TimeText> <span>•</span> <DateText>{date}</DateText>
    </Container>
  );
};
