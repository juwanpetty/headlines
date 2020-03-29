import styled from "styled-components";
import { spacing } from "./constants/styles";

const Container = styled.div`
  position: relative;
  padding-top: ${spacing.padding.xlarge}px;
  padding-bottom: ${spacing.padding.xlarge}px;

  /* vertically center main content */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container };
