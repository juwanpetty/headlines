import styled from "styled-components";
import { typography } from "../../../constants/styles";

export const Container = styled.form`
  width: 400px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  padding: 0 40px;

  & > div {
    margin-bottom: 3.2rem;
  }
`;

export const Header = styled.h3`
  margin: 0 0 16px;
  font-size: ${typography.size.m1}rem;
  font-weight: ${typography.weight.bold};
`;
