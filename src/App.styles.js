import styled from "styled-components";
import { spacing } from "./constants/styles";

const Container = styled.div`
  /* background: ${(props) => props.theme.gray6}; */
  position: relative;
  padding-top: ${spacing.padding.xlarge}px;
  padding-bottom: ${spacing.padding.xlarge}px;

  /* vertically center main content */
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

export { Container };
