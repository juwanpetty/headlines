import React from "react";
import { Container, Image, Title } from "./Shortcut.module";

export const Shortcut = ({ shortcut }) => {
  console.log("\n");
  console.log("Title:", shortcut?.title);
  console.log("URL:", shortcut?.url);
  // const { favicon, title, url } = shortcut;

  // return <Title>Shortcut Component</Title>;

  return (
    <Container href={shortcut.url}>
      <Image src={shortcut.favicon} />
      <Title>{shortcut.title}</Title>
    </Container>
  );
};
