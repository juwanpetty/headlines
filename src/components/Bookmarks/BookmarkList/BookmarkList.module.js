import styled from "styled-components";
import { typography } from "../../../constants/styles";

export const Container = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  padding: 0 40px;
`;

export const EmptyState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${typography.size.s2}rem;
    line-height: 150%;
  }
`;

export const BookmarkIcon = styled.span`
  display: inline-block;
  margin: 0 4px;

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme.gray8};
  }
`;
