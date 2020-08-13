import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addShortcut } from "../../../store/slices/shortcuts";
import {
  Background,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseIcon,
  Button,
  PrimaryButton,
  ButtonGroup,
  InputGroup,
  Input,
  Label,
} from "./AddShortcutModal.module";
import { useOutsideClick } from "../../../hooks/";

export const AddShortcutModal = ({ setShowAdd, isOpen }) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [formError, setFormError] = useState(null);

  useOutsideClick(modalRef, () => {
    if (isOpen) {
      setShowAdd(false);
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

  const closeAddShortcutModal = (e) => {
    e.stopPropagation();
    setShowAdd(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!nameInput || !urlInput) {
      setFormError("Please provide name and url");
    } else {
      setFormError(null);

      dispatch(
        addShortcut({
          id: shortid.generate(),
          name: nameInput,
          url: urlInput,
        })
      );

      setShowAdd(false);
    }
  };

  const errorMarkup = formError ? <p>{formError}</p> : null;

  return (
    <Background>
      <Modal ref={modalRef}>
        <ModalHeader>
          <h3>Add Shortcut</h3>
          <CloseIcon onClick={(e) => closeAddShortcutModal(e)} />
        </ModalHeader>

        <ModalContent>
          {errorMarkup}
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <InputGroup>
              <Label>Name</Label>
              <Input
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
              />
            </InputGroup>
          </form>
        </ModalContent>

        <ModalFooter>
          <ButtonGroup>
            <Button onClick={(e) => closeAddShortcutModal(e)}>Cancel</Button>
            <PrimaryButton type="submit" onClick={(e) => handleSubmit(e)}>
              Add
            </PrimaryButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </Background>
  );
};
