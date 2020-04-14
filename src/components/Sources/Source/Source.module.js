import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

export const Container = styled.div`
  input {
    position: absolute;
    opacity: 0;

    &:checked + label {
      background: ${color.primary};
      border: 1px solid ${color.primary};
      color: ${color.white};
    }
  }

  label {
    display: block;
    margin-bottom: 15px;
    padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
    font-size: ${typography.size.m1}rem;
    border: 1px solid ${color.gray7};
    border-radius: ${spacing.borderRadius.small}px;
    background-color: ${color.gray6};
    cursor: pointer;
  }
`;
