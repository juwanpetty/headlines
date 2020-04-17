import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

export const Container = styled.a`
  list-style-type: none;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  text-decoration: none;
`;

export const ArticleImage = styled.div`
  height: 150px;
  background: #eee;
  border-radius: ${spacing.borderRadius.small}px;
  margin: 8px 8px 0;
  margin-bottom: 10px;
`;

export const Source = styled.p`
  color: ${color.gray8};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${spacing.padding.xmedium}px;
  font-size: ${typography.size.s1}rem;
  text-transform: uppercase;
  padding-top: 0;
  margin: 0 0 8px;
`;

export const Title = styled.h1`
  color: ${color.black};
  font-size: ${typography.size.s2}rem;
  font-weight: ${typography.weight.medium};
  line-height: 140%;
  margin: 0 0 16px;
`;

export const Description = styled.p`
  font-size: ${typography.size.s2}rem;
  color: ${color.gray9};
  line-height: 150%;
  margin: 0 0 32px;
`;

export const Overflow = styled.div`
  overflow: hidden;
  min-height: 95px;
  max-height: 95px;
  padding: 0 ${spacing.padding.xmedium}px;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  width: 100%;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  border-top: 1px solid ${color.gray7};

  p {
    font-size: ${typography.size.s1}rem;
    color: ${color.gray8};
    margin: 0;
  }
`;
