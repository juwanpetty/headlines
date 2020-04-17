import styled from "styled-components";
import { typography, color } from "../../constants/styles";

export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;

  h2 {
    font-size: ${typography.size.l2}rem;
    margin: 0;
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
      color: ${color.gray8};
    }
  }
`;
