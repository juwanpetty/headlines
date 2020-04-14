import React from "react";
import { Container } from "./Source.module";

export const Source = ({ id, name }) => (
  <Container>
    <input name="source" id={id} type="checkbox" value={name}></input>
    <label htmlFor={id}>{name}</label>
  </Container>
);
