import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

export const Container = styled.li`
  list-style-type: none;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;

  p {
    font-size: ${typography.size.s2}rem;
    padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
    margin: 0;
  }
`;
