import styled from "styled-components";
import { spacing, color } from "./constants/styles";

const Container = styled.div`
  background: ${color.gray6};
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
