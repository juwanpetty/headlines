import styled from "styled-components";
import { spacing } from "../../../constants/styles";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding-left: ${spacing.padding.xmedium}px;
  padding-right: ${spacing.padding.xmedium}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.gray6};
`;

export { Container };
