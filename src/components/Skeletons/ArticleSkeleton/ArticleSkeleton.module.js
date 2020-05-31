import styled from "styled-components";
import placeholder from "../../../assets/article/placeholder.jpg";
import { spacing } from "../../../constants/styles";

export const Container = styled.div`
  list-style-type: none;
  border: 1px solid ${(props) => props.theme.gray7};
  border-radius: ${spacing.borderRadius.small}px;
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
  border: 1px solid ${(props) => props.theme.gray7};
`;

export const Source = styled.div`
  background: ${(props) => props.theme.gray7};
  width: 86.5px;
  height: 15px;
  border-radius: 0.25rem;
  margin-left: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  margin: 0 0 16px;

  & > div {
    margin-bottom: 8px;
    background: ${(props) => props.theme.gray7};
    width: 200px;
    height: 15px;
    border-radius: 0.25rem;
  }

  & > div:last-child {
    margin: 0;
    width: 50px;
  }
`;

export const Description = styled.div`
  background: ${(props) => props.theme.gray7};
  width: 200px;
  height: 15px;
  border-radius: 0.25rem;
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
  border-top: 1px solid ${(props) => props.theme.gray7};
`;

export const Published = styled.div`
  background: ${(props) => props.theme.gray7};
  width: 140px;
  height: 15px;
  border-radius: 0.25rem;
`;
