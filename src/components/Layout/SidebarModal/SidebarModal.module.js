import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

export const Content = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-template-columns: 150px 1fr;
`;

export const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  cursor: pointer;

  cursor: ${({ active }) => (active ? "default" : "")};
  color: ${(props) => {
    const isActive = props.active;

    if (isActive) {
      return color.primary;
    } else {
      return props.theme.black;
    }
  }};

  background: ${(props) => {
    const isActive = props.active;

    if (isActive) {
      return "#e8f2ff";
    } else {
      return props.theme.gray6;
    }
  }};

  width: 100%;
  display: block;
  /* margin-bottom: 15px; */
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  font-size: ${typography.size.s2}rem;
  /* border: 1px solid ${(props) => props.theme.gray7}; */
  border-radius: ${spacing.borderRadius.small}px;
  /* background-color: ${(props) => props.theme.white}; */
`;

export const SidebarContainer = styled.div`
  width: 400px;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

export const SidebarInnerContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  overflow-y: hidden;

  ${({ page }) => (page === "sources" ? `transform: translateX(0);` : "")}

  ${({ page }) =>
    page === "bookmarks" ? `transform: translateX(-400px);` : ""}

  ${({ page }) => (page === "settings" ? `transform: translateX(-800px);` : "")}
`;

export const SidebarPage = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  padding: 0 40px;
`;

export const SettingsList = styled(SidebarPage)`
  & > div:last-child {
    margin-bottom: 100px;
  }
`;
