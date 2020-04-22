/* global chrome */
import React, { useEffect } from "react";
import { Shortcut } from "../";
import { Container } from "./ShortcutList.module";

export const ShortcutList = () => {
  useEffect(() => {
    chrome.topSites.get(() => {
      console.log("topSites:");
    });
  });

  return (
    <Container>
      <Shortcut />
      <Shortcut />
      <Shortcut />
    </Container>
  );
};
