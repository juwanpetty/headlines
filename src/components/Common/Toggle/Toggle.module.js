import styled from "styled-components";

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #ededed;
  cursor: pointer;
  transition: background 200ms;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: #ffffff;
    transition: 200ms;
  }
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
`;

export const Checkbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  margin: 0;
  padding: 0;
  &:checked + ${Label} {
    background: #007aff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 25px;
      transition: 150ms;
      background: #ffffff;
    }
  }
`;
