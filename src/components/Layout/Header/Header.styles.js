import styled from "styled-components";
import { spacing } from "../../../constants/styles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding-left: ${spacing.padding.medium}px;
  padding-right: ${spacing.padding.medium}px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { Container };
