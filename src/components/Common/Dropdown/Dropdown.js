import React from "react";
import Select from "react-select";
import { Container } from "./Dropdown.module";
import { useSelector } from "react-redux";
import { uiSelector } from "../../../store/slices/ui";
import { color } from "../../../constants/styles";

export const Dropdown = ({ options, defaultValue, placeholder, onChange }) => {
  const { theme } = useSelector(uiSelector);

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: theme === "light" ? color.light.gray9 : color.dark.gray9,
      background: theme === "light" ? color.light.white : color.dark.white,
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "1.4rem",
    }),
    control: (provided) => ({
      ...provided,
      fontSize: "1.4rem",
      background: theme === "light" ? color.light.white : color.dark.white,
      borderColor: theme === "light" ? color.light.gray7 : color.dark.gray7,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "light" ? color.light.gray9 : color.dark.gray9,
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
