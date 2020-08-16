import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../Common/";
import {
  updateShortcut,
  removeShortcut,
} from "../../../store/slices/shortcuts";
import { useOutsideClick } from "../../../hooks/";
import { Input, InputGroup, Label } from "./EditShortcutModal.module";

export const EditShortcutModal = ({ shortcut, setShowEdit, isOpen }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    setNameInput(shortcut.name);
    setUrlInput(shortcut.url);
  }, [shortcut]);

  useOutsideClick(modalRef, () => {
    if (isOpen) {
      setShowEdit(false);
    }
  });

  const onNameChange = (e) => {
    const name = e.target.value;
    setNameInput(name);
  };

  const onUrlChange = (e) => {
    const url = e.target.value;
    setUrlInput(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!nameInput || !urlInput) {
      setFormError("Please provide name and url");
    } else {
      setFormError(null);

      dispatch(
        updateShortcut({
          id: shortcut.id,
          name: nameInput,
          url: urlInput,
        })
      );

      setShowEdit(false);
    }
  };

  const handleRemove = () => {
    dispatch(removeShortcut(shortcut.id));
    setShowEdit(false);
  };

  const handleOnBlur = () => {
    if (!urlInput.includes("://")) {
      setUrlInput("http://" + urlInput);
    }
  };

  const errorMarkup = formError ? <p>{formError}</p> : null;

  return (
    <Modal
      ref={modalRef}
      headerText="Edit Shortcut"
      primaryAction={{
        content: "Done",
        onAction: (e) => handleSubmit(e),
      }}
      secondaryAction={{
        content: "Remove",
        onAction: () => handleRemove(),
      }}
      onClose={() => setShowEdit(false)}
    >
      {errorMarkup}
      <form>
        <InputGroup>
          <Label>Name</Label>
          <Input
            tabindex="0"
            placeholder="name"
            name="name"
            type="text"
            value={nameInput}
            onChange={(e) => onNameChange(e)}
          />
        </InputGroup>
        <InputGroup>
          <Label>URL</Label>
          <Input
            placeholder="url"
            name="url"
            type="text"
            value={urlInput}
            onChange={(e) => onUrlChange(e)}
            onBlur={() => handleOnBlur()}
          />
        </InputGroup>
      </form>
    </Modal>
  );
};
