import React, { useRef, useEffect } from "react";
import { Container, Image, Title } from "./Shortcut.module";

export const Shortcut = ({ shortcut }) => {
  const ref = useRef();

  useEffect(() => {
    if (!shortcut.favicon) {
      ref.current.srcset = `chrome://favicon/size/16@2x/${shortcut.url}%202x`;
    }
  });

  return (
    <Container href={shortcut.url}>
      <Image
        ref={ref}
        src={
          shortcut.favicon
            ? shortcut.favicon
            : `chrome://favicon/${shortcut.url}`
        }
      />
      <Title>{shortcut.title}</Title>
    </Container>
  );
};
