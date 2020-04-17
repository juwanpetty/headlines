import React from "react";
import { Container } from "./Source.module";

export const Source = ({ id, name, checked }) => (
  <Container>
    <input
      name="source"
      id={id}
      type="checkbox"
      value={name}
      defaultChecked={checked}
    ></input>
    <label htmlFor={id}>{name}</label>
  </Container>
);
