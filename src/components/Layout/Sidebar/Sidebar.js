import React, { useState } from "react";
import { SourceList } from "../../Sources/SourceList/SourceList";
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
  Settings,
} from "./Sidebar.styles";

export const Sidebar = ({ onSetSidebarVisible, visible }) => {
  const [page, setPage] = useState("sources");

  return (
    <Container visible={visible}>
      <SidebarHeader>
        <h3>Sources</h3>
        <p>Choose what you see on the page.</p>
      </SidebarHeader>
      <Navigation>
        <NavigationItem onClick={() => setPage("sources")}>
          Sources
        </NavigationItem>
        <NavigationItem onClick={() => setPage("reading-list")}>
          Reading List
        </NavigationItem>
        <NavigationItem onClick={() => setPage("settings")}>
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
            <Settings>Settings</Settings>
          </SettingsList>
        </SidebarInnerContainer>
      </SidebarContainer>
      <Footer>
        <FooterButton type="button" onClick={() => onSetSidebarVisible(false)}>
          Done
        </FooterButton>
      </Footer>
    </Container>
  );
};
