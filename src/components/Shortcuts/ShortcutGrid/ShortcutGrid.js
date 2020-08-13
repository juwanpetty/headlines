import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, AddContainer } from "./ShortcutGrid.module";
import { shortcutsSelector } from "../../../store/slices/shortcuts";
import { MdAdd } from "react-icons/md";
import { Shortcut } from "../Shortcut/Shortcut";
import { AddShortcutModal } from "../AddShortcutModal/AddShortcutModal";

const AddShortcut = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <AddContainer onClick={() => setShowAddModal(true)}>
        <MdAdd />
      </AddContainer>
      {showAddModal && (
        <AddShortcutModal setShowAdd={setShowAddModal} isOpen={showAddModal} />
      )}
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
