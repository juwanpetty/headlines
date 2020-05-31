import styled from "styled-components";
import { color } from "../../../constants/styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
  padding-left: 36px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  outline: 0;

  &::before {
    position: absolute;
    content: "";
    display: inline-block;

    height: 1.6rem;
    width: 1.6rem;

    border: 1px solid ${(props) => props.theme.gray8};
    border-radius: 50%;

    /* outer box */
    top: 0.1rem;
    left: -3.6rem;
  }

  &::after {
    position: absolute;
    content: "";
    display: inline-block;

    width: 8px;
    height: 8px;

    border-radius: 50%;
    background: ${color.primary};

    /* checked cirle */
    left: -32px;
    top: 5px;
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  position: absolute;

  /* Hide the checkmark by default */
  & + ${Label}::after {
    content: none;
  }

  /* Unhide the checkmark on the checked state */
  &:checked + ${Label}::after {
    content: "";
  }
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 150%;
  margin: 0;
  margin-bottom: 8px;
`;
