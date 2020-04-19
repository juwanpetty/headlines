import React from "react";
import { Container, Checkbox, Label } from "./Toggle.module";

export const Toggle = ({ name, id, checked, onChange }) => {
  return (
    <Container>
      <Checkbox
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={id} />
    </Container>
  );
};
