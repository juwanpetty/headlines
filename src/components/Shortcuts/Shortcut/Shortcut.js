import React, { useRef, useEffect, useState } from "react";
import { Container, MoreOpitions, Image, Title } from "./Shortcut.module";
import { EditShortcutModal } from "../index";

export const Shortcut = ({ shortcut }) => {
  const ref = useRef();
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    ref.current.src = `chrome://favicon/size/16@1x/${shortcut.url}`;
    ref.current.srcset = `
      chrome://favicon/size/16@1x/${shortcut.url},
      chrome://favicon/size/16@2x/${shortcut.url} 2x
    `;
  }, [shortcut]);

  const openEdit = (e) => {
    e.preventDefault();
    setShowEdit(true);
  };

  return (
    <>
      <Container href={shortcut.url}>
        <Image ref={ref} />
        <MoreOpitions onClick={(e) => openEdit(e)} />
        <Title>{shortcut.title || shortcut.name}</Title>
      </Container>
      {showEdit && (
        <EditShortcutModal
          setShowEdit={setShowEdit}
          shortcut={shortcut}
          isOpen={showEdit}
        />
      )}
    </>
  );
};
