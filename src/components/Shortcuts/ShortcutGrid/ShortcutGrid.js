import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, AddContainer } from "./ShortcutGrid.module";
import { shortcutsSelector } from "../../../store/slices/shortcuts";
import { MdAdd } from "react-icons/md";
import { Shortcut } from "../Shortcut/Shortcut";
import { AddShortcutModal } from "../AddShortcutModal/AddShortcutModal";

const AddShortcut = () => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <>
      <AddContainer onClick={() => setShowAdd(true)}>
        <MdAdd />
      </AddContainer>
      {showAdd && <AddShortcutModal setShowAdd={setShowAdd} isOpen={showAdd} />}
    </>
  );
};

export const ShortcutGrid = () => {
  const { shortcuts } = useSelector(shortcutsSelector);

  return (
    <Container>
      {shortcuts &&
        shortcuts.map((shortcut) => (
          <Shortcut key={shortcut.id} shortcut={shortcut} />
        ))}
      <AddShortcut />
    </Container>
  );
};
