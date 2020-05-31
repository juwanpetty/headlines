import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

export const Container = styled.div`
  input {
    position: absolute;
    opacity: 0;

    &:checked + label {
      background: ${(props) => color.primary};
      border: 1px solid ${(props) => color.primary};

      color: ${(props) => {
        const isDark = props.theme.theme;

        if (isDark === "dark") {
          return color.dark.black;
        } else {
          return color.light.white;
        }
      }};
    }
  }

  label {
    display: block;
    margin-bottom: 15px;
    padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
    font-size: ${typography.size.s2}rem;
    border: 1px solid ${(props) => props.theme.gray7};
    border-radius: ${spacing.borderRadius.small}px;
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`;
