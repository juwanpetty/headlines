import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

export const Container = styled.a`
  list-style-type: none;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  display: grid;
  grid-gap: 16px;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  grid-template-columns: auto 1fr;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: ${typography.size.s2}rem;
  color: ${color.black};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  align-self: center;
`;
