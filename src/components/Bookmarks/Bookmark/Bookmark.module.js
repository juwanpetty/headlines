import styled from "styled-components";
import { color } from "../../../constants/styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 75px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;

  &:not(:last-child) {
    margin-bottom: 16px;
    border-bottom: 1px solid #ededed;
    padding-bottom: 16px;
  }
`;

export const Title = styled.div`
  color: #414141;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 140%;
  margin: 0 0 16px;
`;

export const Meta = styled.div`
  font-size: 1.2rem;
  color: #b7b7b7;
  margin: 0;
`;

export const Image = styled.div`
  width: 100%;
  height: 75px;
  border-radius: 3px;
  background: #eee;
  border: 1px solid ${color.gray7};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Remove = styled.p`
  color: #414141;
  align-self: center;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0;
  font-weight: 500;

  svg {
    width: 24px;
    height: 24px;
    color: #b7b7b7;
  }
`;
