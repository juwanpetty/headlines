import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

const Container = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 1;

  background: ${color.white};
  padding: ${spacing.padding.large}px;
  border-left: 1px solid ${color.gray7};
  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);

  transform: ${props => (props.visible ? "translateX(0)" : "translate(400px)")};
  transition: 0.25s;
`;

const SidebarHeader = styled.div`
  margin-bottom: 25px;

  h3 {
    margin: 0;
    font-size: ${typography.size.m2}rem;
    font-weight: ${typography.weight.medium};
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: ${typography.size.s2}rem;
  }
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const NavigationItem = styled.li`
  list-style-type: none;
  font-size: ${typography.size.s2}rem;
`;

const SidebarContainer = styled.div`
  height: calc(100vh - 244px);
  width: 319px;
  overflow: hidden;
  position: relative;
`;

const SidebarInnerContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  overflow-y: hidden;

  ${({ page }) => (page === "sources" ? `transform: translateX(0);` : "")}

  ${({ page }) =>
    page === "reading-list" ? `transform: translateX(-359px);` : ""}

  ${({ page }) => (page === "settings" ? `transform: translateX(-718px);` : "")}
`;

const SourcesList = styled.div`
  width: 319px;
  height: 100%;
  margin-right: 40px;
  position: relative;
`;

const SourceGroup = styled.div`
  h3 {
    margin: 0 0 16px;
    font-size: ${typography.size.m1}rem;
    font-weight: ${typography.weight.bold};
  }

  input {
    position: absolute;
    opacity: 0;

    &:checked + label {
      background: ${color.primary};
      border: 1px solid ${color.primary};
      color: ${color.white};
    }
  }

  label {
    display: block;
    margin-bottom: 15px;
    padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
    font-size: ${typography.size.m1}rem;
    border: 1px solid ${color.gray7};
    border-radius: ${spacing.borderRadius.small}px;
    background-color: ${color.gray6};
    cursor: pointer;
  }
`;

const BookmarkList = styled.div`
  width: 319px;
  height: 100%;
  margin-right: 40px;
  position: relative;
`;

const Bookmark = styled.div``;

const SettingsList = styled.div`
  width: 319px;
  height: 100%;
  margin-right: 40px;
  position: relative;
`;

const Settings = styled.div``;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 399px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background: ${color.gray6};
  border-top: 1px solid ${color.gray7};
  padding: ${spacing.padding.xmedium}px ${spacing.padding.large}px;
`;

const FooterButton = styled.button`
  cursor: pointer;
  background-color: ${color.gray6};
  border-radius: ${spacing.borderRadius.small}px;
  font-size: ${typography.size.s2}rem;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  background: ${color.primary};
  color: ${color.white};
  border: none;
`;

export {
  Container,
  SidebarHeader,
  Navigation,
  NavigationItem,
  SidebarContainer,
  SidebarInnerContainer,
  SourcesList,
  SourceGroup,
  BookmarkList,
  Bookmark,
  SettingsList,
  Settings,
  Footer,
  FooterButton
};
