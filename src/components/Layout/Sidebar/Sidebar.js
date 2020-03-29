import React, { useState } from "react";
import {
  Container,
  SidebarHeader,
  Navigation,
  NavigationItem,
  SidebarContainer,
  SourcesList,
  SourceGroup,
  BookmarkList,
  Bookmark,
  Footer,
  FooterButton,
  SidebarInnerContainer,
  SettingsList,
  Settings
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
          <SourcesList>
            <SourceGroup>
              <h3>Business</h3>
              <div>
                <input
                  name="source"
                  id="bloomberg"
                  type="checkbox"
                  value="Bloomberg"
                ></input>
                <label htmlFor="bloomberg">Bloomberg</label>
              </div>
              <div>
                <input
                  name="source"
                  id="business-insider"
                  type="checkbox"
                  value="Business Insider"
                ></input>
                <label htmlFor="business-insider">Business Insider</label>
              </div>
              <div>
                <input
                  name="source"
                  id="cnbc"
                  type="checkbox"
                  value="CNBC"
                ></input>
                <label htmlFor="cnbc">CNBC</label>
              </div>
              <div>
                <input
                  name="source"
                  id="fortune"
                  type="checkbox"
                  value="Fortune"
                ></input>
                <label htmlFor="fortune">Fortune</label>
              </div>
              <div>
                <input
                  name="source"
                  id="the-wall-street-journal"
                  type="checkbox"
                  value="The Wall Street Journal"
                ></input>
                <label htmlFor="the-wall-street-journal">
                  The Wall Street Journal
                </label>
              </div>
            </SourceGroup>
          </SourcesList>
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
