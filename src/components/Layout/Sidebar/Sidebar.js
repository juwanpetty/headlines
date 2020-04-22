import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { equals } from "../../../helpers/";
import { SourceList } from "../../Sources/SourceList/SourceList";
import { Articles, Weather, Clock } from "../../Settings/";
import { useOutsideClick } from "../../../hooks/";
import { toggleSidebar, uiSelector } from "../../../store/slices/ui";
import {
  Container,
  SidebarHeader,
  Navigation,
  NavigationItem,
  SidebarContainer,
  BookmarkList,
  Bookmark,
  Footer,
  FooterButton,
  SidebarInnerContainer,
  SettingsList,
} from "./Sidebar.styles";
import {
  sourcesSelector,
  updateUserSources,
} from "../../../store/slices/sources";

export const Sidebar = () => {
  const sidebarRef = useRef();
  const [page, setPage] = useState("sources");

  const { isSidebarOpen } = useSelector(uiSelector);
  const { userSources, sidebarSources } = useSelector(sourcesSelector);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(toggleSidebar());

    const sameSources = equals(userSources, sidebarSources);

    // if true, do nothing
    if (sameSources) {
      return;
    } else {
      // else update userSources
      dispatch(updateUserSources(sidebarSources));
    }
  };

  useOutsideClick(sidebarRef, () => {
    if (isSidebarOpen) {
      closeSidebar();
    }
  });

  return (
    <Container visible={isSidebarOpen} ref={sidebarRef}>
      <SidebarHeader>
        <h3>Sources</h3>
        <p>Choose what you see on the page.</p>
      </SidebarHeader>
      <Navigation>
        <NavigationItem
          active={page === "sources"}
          onClick={() => setPage("sources")}
        >
          Sources
        </NavigationItem>
        <NavigationItem
          active={page === "reading-list"}
          onClick={() => setPage("reading-list")}
        >
          Reading List
        </NavigationItem>
        <NavigationItem
          active={page === "settings"}
          onClick={() => setPage("settings")}
        >
          Settings
        </NavigationItem>
      </Navigation>
      <SidebarContainer>
        <SidebarInnerContainer page={page}>
          <SourceList />
          <BookmarkList>
            <Bookmark>Bookmark</Bookmark>
          </BookmarkList>
          <SettingsList>
            <Articles />
            <Weather />
            <Clock />
          </SettingsList>
        </SidebarInnerContainer>
      </SidebarContainer>
      <Footer>
        <FooterButton type="button" onClick={() => closeSidebar()}>
          Done
        </FooterButton>
      </Footer>
    </Container>
  );
};
