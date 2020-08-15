import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useOutsideClick } from "../../../hooks";
import { equals } from "../../../helpers/";
import { toggleSidebar, uiSelector } from "../../../store/slices/ui";
import {
  sourcesSelector,
  updateUserSources,
} from "../../../store/slices/sources";
import { SourceList } from "../../Sources/SourceList/SourceList";
import { BookmarkList } from "../../Bookmarks/BookmarkList/BookmarkList";
import { Articles, Weather, Clock, Search, Theme } from "../../Settings/";
import { Modal } from "../../Common";
import {
  Content,
  Navigation,
  NavigationItem,
  SidebarContainer,
  SidebarInnerContainer,
  SettingsList,
} from "./SidebarModal.module";

export const SidebarModal = () => {
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

  return isSidebarOpen ? (
    <Modal
      ref={sidebarRef}
      headerText="Preferences"
      primaryAction={{
        content: "Done",
        onAction: () => closeSidebar(),
      }}
      onClose={() => closeSidebar()}
    >
      <Content>
        <Navigation>
          <NavigationItem
            active={page === "sources"}
            onClick={() => setPage("sources")}
          >
            Sources
          </NavigationItem>
          <NavigationItem
            active={page === "bookmarks"}
            onClick={() => setPage("bookmarks")}
          >
            Bookmarks
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
            <BookmarkList />
            <SettingsList>
              <Articles />
              <Weather />
              <Search />
              <Clock />
              <Theme />
            </SettingsList>
          </SidebarInnerContainer>
        </SidebarContainer>
      </Content>
    </Modal>
  ) : null;
};
