import React, { forwardRef } from "react";
import {
  Background,
  Container,
  CloseIcon,
  Header,
  Content,
  Footer,
  ButtonGroup,
  Button,
  PrimaryButton,
} from "./Modal.module";

export const Modal = forwardRef(
  ({ headerText, primaryAction, secondaryAction, onClose, children }, ref) => {
    const primaryButtonMarkup = primaryAction && (
      <PrimaryButton onClick={primaryAction.onAction}>
        {primaryAction.content}
      </PrimaryButton>
    );

    const secondaryButtonMarkup = secondaryAction && (
      <Button onClick={secondaryAction.onAction}>
        {secondaryAction.content}
      </Button>
    );

    return (
      <Background>
        <Container ref={ref}>
          <Header>
            <h3>{headerText}</h3>
            <CloseIcon onClick={() => onClose()} />
          </Header>

          <Content>{children}</Content>

          <Footer>
            <ButtonGroup>
              {secondaryButtonMarkup}
              {primaryButtonMarkup}
            </ButtonGroup>
          </Footer>
        </Container>
      </Background>
    );
  }
);
