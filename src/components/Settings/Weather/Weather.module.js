import styled from "styled-components";
import { typography } from "../../../constants/styles";

export const Container = styled.div`
  margin-bottom: 32px;

  ${({ disabled }) => (disabled ? "opacity: 0.5" : "opacity: 1")};
  ${({ disabled }) =>
    disabled ? "pointer-events: none" : "pointer-events: all"};
`;

export const Header = styled.div`
  display: grid;
  grid-template-areas:
    "header toggle"
    "subtitle toggle";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-column-gap: 32px;
  grid-row-gap: 4px;
  margin-bottom: 16px;

  & > label {
    grid-area: header;
  }

  & > div {
    grid-area: toggle;
    align-self: center;
  }

  & > p {
    grid-area: subtitle;
    font-size: 14px;
    line-height: 150%;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m1}rem;
`;
