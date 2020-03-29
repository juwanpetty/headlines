import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { color, spacing, typography } from "../../../constants/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Clock = styled.h2`
  margin: 0;
  font-size: ${typography.size.l3}rem;
  margin-bottom: 5rem;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  padding: 0 45px;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  margin-bottom: 5rem;
`;

const Search = styled.input`
  font-size: ${typography.size.s2}rem;
  color: ${color.gray9};
  width: 100%;
  border: none;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
`;

const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0%;
  right: 0;
  height: 100%;
  border-top-left-radius: ${spacing.borderRadius.small}px;
  border-bottom-left-radius: ${spacing.borderRadius.small}px;
  padding: 0 ${spacing.padding.small}px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchButtonIcon = styled(MdSearch)`
  font-size: ${typography.size.m2}rem;
  color: ${color.gray8};
`;

const SearchEngine = styled.div`
  position: absolute;
  width: 40px;
  height: 31px;
  top: 5px;
  left: 5px;
  cursor: pointer;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
`;

const ArticleList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(3, minmax(245px, 1fr));
  max-width: 800px;
  width: 100%;
  margin-bottom: 5rem;
`;

const Article = styled.li`
  list-style-type: none;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
`;

const ArticleImage = styled.div`
  height: 150px;
  background: #eee;
  border-radius: ${spacing.borderRadius.small}px;
  margin: 8px 8px 0;
  margin-bottom: 10px;
`;

const Source = styled.p`
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

const Title = styled.h1`
  font-size: ${typography.size.s2}rem;
  font-weight: ${typography.weight.medium};
  line-height: 140%;
  margin: 0 0 16px;
`;

const Description = styled.p`
  font-size: ${typography.size.s2}rem;
  color: ${color.gray9};
  line-height: 150%;
  margin: 0 0 32px;
`;

const Overflow = styled.div`
  overflow: hidden;
  min-height: 95px;
  max-height: 95px;
  padding: 0 ${spacing.padding.xmedium}px;
  margin-bottom: 12px;
`;

const Footer = styled.div`
  width: 100%;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  border-top: 1px solid ${color.gray7};

  p {
    font-size: ${typography.size.s1}rem;
    color: ${color.gray8};
    margin: 0;
  }
`;

const ShortcutList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 800px;
  width: 100%;
`;

const Shortcut = styled.li`
  list-style-type: none;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;

  p {
    font-size: ${typography.size.s2}rem;
    padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
    margin: 0;
  }
`;

export {
  Container,
  Clock,
  SearchContainer,
  Search,
  SearchEngine,
  SearchButton,
  SearchButtonIcon,
  ArticleList,
  Article,
  ArticleImage,
  Source,
  Title,
  Description,
  Footer,
  Overflow,
  ShortcutList,
  Shortcut
};
