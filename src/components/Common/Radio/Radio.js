import React from "react";
import { Container, RadioInput, Label, Title } from "./Radio.module";

export const Radio = ({ label, name, id, checked, onChange }) => {
  return (
    <Container>
      <RadioInput
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

export const RadioGroup = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);
