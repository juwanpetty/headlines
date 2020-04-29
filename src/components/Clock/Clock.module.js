import styled from "styled-components";
import { typography } from "../../constants/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;

  span {
    font-size: ${typography.size.m2}rem;
    margin: 0 16px;
  }
`;

export const Content = styled.h2`
  font-variant-numeric: tabular-nums;
  font-size: ${typography.size.l2}rem;
  margin: 0;
`;

export const TimeText = styled(Content)`
  font-weight: ${typography.weight.semibold};
`;

export const DateText = styled(Content)`
  font-weight: ${typography.weight.regular};
`;
