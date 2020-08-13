/* global chrome */
/* global browser */
import React, { useEffect, useState } from "react";
import { Shortcut } from "../";
// import { shortcutsData } from "../../../mock/shortcutsData";
import { Container } from "./ShortcutList.module";

export const ShortcutList = () => {
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    try {
      browser.topSites.get({ includeFavicon: true }, (results) => {
        setShortcuts(results.slice(0, 7));
      });
    } catch (error) {}

    try {
      chrome.topSites.get((results) => {
        setShortcuts(results.slice(0, 7));
      });
    } catch (error) {}
  }, []);

  return (
    <Container>
      {shortcuts &&
        shortcuts.map((shortcut) => (
          <Shortcut key={shortcut.title} shortcut={shortcut} />
        ))}
    </Container>
  );
};
