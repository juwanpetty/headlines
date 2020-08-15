import styled from "styled-components";
import { MdClose } from "react-icons/md";

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

export const Container = styled.div`
  min-width: 400px;
  padding: 24px 32px 16px;
  border-radius: 4px;
  background: ${(props) => props.theme.gray6};

  box-shadow: 20px 40px 60px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
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

export const Content = styled.div`
  margin-bottom: 16px;
`;

export const Footer = styled.div`
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
