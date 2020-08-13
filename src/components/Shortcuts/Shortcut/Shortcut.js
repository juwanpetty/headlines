import React, { useRef, useEffect, useState } from "react";
import { Container, MoreOpitions, Image, Title } from "./Shortcut.module";
import { EditShortcutModal } from "../index";

export const Shortcut = ({ shortcut }) => {
  const ref = useRef();
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    if (shortcut && !shortcut.favicon) {
      ref.current.srcset = `chrome://favicon/size/16@2x/${shortcut.url}%202x`;
    } else {
      ref.current.srcset = "";
    }
  }, [shortcut]);

  const openEdit = (e) => {
    console.log("openEdit");
    e.preventDefault();
    setShowEdit(true);
  };

  return (
    <>
      <Container href={shortcut.url}>
        <Image
          ref={ref}
          src={
            shortcut.favicon
              ? shortcut.favicon
              : `chrome://favicon/${shortcut.url}`
          }
        />
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
