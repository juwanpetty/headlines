import styled from "styled-components";
import placeholder from "../../../assets/article/placeholder.jpg";
import { color, spacing, typography } from "../../../constants/styles";

export const Container = styled.a`
  list-style-type: none;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  text-decoration: none;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);
  transition: box-shadow 150ms;

  &:hover {
    box-shadow: 0 0 0 5px #007aff;
  }
`;

export const ArticleImage = styled.div`
  height: 150px;
  background: #eee;
  border-radius: ${spacing.borderRadius.small}px;
  margin: 8px 8px 0;
  margin-bottom: 10px;
  overflow: hidden;

  background-image: url(${placeholder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid ${color.gray7};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 150ms;
  ${({ loaded }) => (loaded ? "opacity: 1;" : "opacity: 0;")};
  ${({ loaded }) => (loaded ? "filter: blur(0);" : "filter: blur(5px);")}
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

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${typography.size.s1}rem;
    color: ${color.gray8};
    margin: 0;
  }
`;

export const Bookmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    color: ${({ checked }) => (checked ? `${color.red}` : `${color.gray8}`)};
  }
`;
