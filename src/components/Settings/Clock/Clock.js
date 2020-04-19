import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowClock, clockSelector } from "../../../store/slices/clock";
import { Toggle } from "../../Common/";
import { Label, Header, Container } from "./Clock.module";

export const Clock = () => {
  const dispatch = useDispatch();
  const { showClock } = useSelector(clockSelector);

  return (
    <Container disabled={!showClock}>
      <Header>
        <Label htmlfor="clock">Clock</Label>
        <Toggle
          name="clock"
          id="clock"
          checked={showClock}
          onChange={() => dispatch(toggleShowClock())}
        />
        <p>Display a clock on the new tab page.</p>
      </Header>
    </Container>
  );
};
