import React from "react";
import Select from "react-select";
import { Container } from "./Dropdown.module";

export const Dropdown = ({ options, defaultValue, placeholder, onChange }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
    }),
    control: (provided) => ({
      ...provided,
      fontSize: "1.4rem",
    }),
  };

  return (
    <Container>
      <Select
        defaultValue={defaultValue}
        styles={customStyles}
        onChange={onChange}
        options={options}
        isSearchable={false}
        placeholder={placeholder}
      />
    </Container>
  );
};
