import styled from "styled-components";
import { spacing } from "../../../constants/styles";

export const Container = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(7, 1fr);
  max-width: 800px;
  width: 100%;
`;

export const AddContainer = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.white};
  list-style-type: none;
  border: 1px solid ${(props) => props.theme.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  text-decoration: none;
  width: 90px;
  height: 90px;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);
  transition: box-shadow 150ms;

  &:hover {
    box-shadow: 0 0 0 5px #007aff;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
`;
