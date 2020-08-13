import styled from "styled-components";
import { spacing, typography } from "../../../constants/styles";

export const Background = styled.div`
  width: 200px;
  height: 200px;
  background: #ccc;
  position: fixed;
  left: 50%;
  margin-left: -50%;
  top: 50%;
  margin-top: -50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border: 1px solid ${(props) => props.theme.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  background: ${(props) => props.theme.white};
  transition: box-shadow 150ms;
  font-size: ${typography.size.s2}rem;
  color: ${(props) => props.theme.gray9};
  width: 100%;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  padding-left: ${spacing.padding.xsmall}px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);

  &:focus {
    box-shadow: 0 0 0 5px #007aff;
  }
`;

export const Label = styled.h3`
  margin: 0 0 16px;
  font-size: ${typography.size.m1}rem;
  font-weight: ${typography.weight.bold};
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;
