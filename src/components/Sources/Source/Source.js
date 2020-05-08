import React from "react";
import { Container } from "./Source.module";
import { sourcesSelector } from "../../../store/slices/sources";
import { useSelector } from "react-redux";

export const Source = ({ id, name, checked }) => {
  const { sidebarSources } = useSelector(sourcesSelector);

  const handleOnClick = (e) => {
    // if there is only one source left AND it's been unchecked
    if (e.target.checked === false && sidebarSources.length - 1 === 0) {
      e.target.checked = true;
    }
  };

  return (
    <Container>
      <input
        name="source"
        id={id}
        type="checkbox"
        value={name}
        defaultChecked={checked}
        onClick={(e) => handleOnClick(e)}
      ></input>
      <label htmlFor={id}>{name}</label>
    </Container>
  );
};
