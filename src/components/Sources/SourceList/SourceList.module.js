import styled from "styled-components";
import { typography } from "../../../constants/styles";

export const Container = styled.div`
  width: 319px;
  height: 100%;
  margin-right: 40px;
  position: relative;
  overflow-y: scroll;

  & > div {
    margin-bottom: 3.2rem;
  }
`;

export const Header = styled.h3`
  margin: 0 0 16px;
  font-size: ${typography.size.m1}rem;
  font-weight: ${typography.weight.bold};
`;
