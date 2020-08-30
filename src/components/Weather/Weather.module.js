import styled from "styled-components";
import { typography } from "../../constants/styles";

export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;

  ${({ visible }) => (visible ? `opacity: 1;` : `opacity: 0;`)}
  transition: opacity 150ms;

  h2 {
    font-variant-numeric: tabular-nums;
    font-size: ${typography.size.l2}rem;
    font-weight: ${typography.weight.semibold};
    margin: 0;

    display: flex;
    align-items: flex-start;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}rem;
    line-height: 100%;
    margin: 0;

    &:first-child {
      margin-bottom: 8px;
    }

    &:last-child {
      color: ${(props) => props.theme.gray8};
    }
  }

  span {
    font-size: 20px;
    margin-left: 4px;
    margin-top: 4px;
  }
`;
