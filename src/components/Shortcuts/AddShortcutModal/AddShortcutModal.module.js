import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { typography, spacing } from "../../../constants/styles";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  margin-top: -50vh; /* Negative half of height. */
  margin-left: -50vw; /* Negative half of width. */

  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const CloseIcon = styled(MdClose)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Modal = styled.div`
  width: 400px;
  padding: 24px 32px 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.gray6};

  box-shadow: 20px 40px 60px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 100%;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 16px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
`;

export const ButtonGroup = styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #1e86ff;
  background: #e8f2ff;
  border: none;
  cursor: pointer;

  border-radius: 3px;
  padding: 12px 24px;
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background: #007aff;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border: 1px solid ${(props) => props.theme.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  background: ${(props) => props.theme.white};
  transition: box-shadow 150ms;
  font-size: ${typography.size.s2}rem;
  color: ${(props) => props.theme.gray9};
  width: 100%;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  padding-left: ${spacing.padding.xsmall}px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);

  &:focus {
    box-shadow: 0 0 0 5px #007aff;
  }
`;

export const Label = styled.h3`
  margin: 0 0 16px;
  font-size: ${typography.size.m1}rem;
  font-weight: ${typography.weight.bold};
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;
