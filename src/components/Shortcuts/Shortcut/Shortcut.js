import React, { useRef, useEffect, useState } from "react";
import { Container, MoreOpitions, Image, Title } from "./Shortcut.module";
import { EditShortcutModal } from "../index";

export const Shortcut = ({ shortcut }) => {
  const ref = useRef();
  const [showEdit, setShowEdit] = useState(false);
  const [favicon, setFavicon] = useState(null);

  useEffect(() => {
    if (shortcut && shortcut.favicon) {
      setFavicon(shortcut.favicon);
    } else {
      setFavicon("chrome://favicon/size/16@1x/" + shortcut.url);
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
        <Image ref={ref} src={favicon} />
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
