/* global chrome */
import React, { useEffect } from "react";
import { Shortcut } from "../";
import { Container } from "./ShortcutList.module";

export const ShortcutList = () => {
  useEffect(() => {
    try {
      chrome.topSites.get((data) => {
        console.log(data);
      });
    } catch (error) {}
  }, []);

  return (
    <Container>
      <Shortcut />
      <Shortcut />
      <Shortcut />
    </Container>
  );
};
