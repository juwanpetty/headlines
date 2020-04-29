import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowClock,
  clockSelector,
  updateTimeFormat,
  updateDateTimeFormat,
} from "../../../store/slices/clock";
import { Toggle, Radio, RadioGroup, Dropdown } from "../../Common/";
import { Label, Header, Container } from "./Clock.module";

export const Clock = () => {
  const dispatch = useDispatch();
  const { showClock, timeFormat, dateTimeFormat } = useSelector(clockSelector);

  const clockOptions = [
    { value: "date-time", label: "Date and Time" },
    { value: "date-only", label: "Date only" },
    { value: "time-only", label: "Time only" },
  ];

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
      <Dropdown
        defaultValue={dateTimeFormat}
        options={clockOptions}
        placeholder="Date and Time format"
        onChange={(option) => dispatch(updateDateTimeFormat(option))}
        autoFocus
      />

      <RadioGroup title="Choose an hour format">
        <Radio
          label="12-hour"
          id="12-hour"
          name="hour-format"
          value="12-hour"
          checked={timeFormat === "12"}
          onChange={() => dispatch(updateTimeFormat("12"))}
        />
        <Radio
          label="24-hour"
          id="24-hour"
          name="hour-format"
          value="24-hour"
          checked={timeFormat === "24"}
          onChange={() => dispatch(updateTimeFormat("24"))}
        />
      </RadioGroup>
    </Container>
  );
};
