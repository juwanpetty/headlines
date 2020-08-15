import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { spacing, typography } from "../../../constants/styles";

export const Container = styled.a`
  background: ${(props) => props.theme.white};
  list-style-type: none;
  border: 1px solid ${(props) => props.theme.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: ${spacing.padding.xsmall}px;
  text-decoration: none;
  position: relative;
  height: 75px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);
  transition: box-shadow 150ms;

  &:hover {
    box-shadow: 0 0 0 5px #007aff;

    svg {
      opacity: 1;
    }
  }
`;

export const Title = styled.p`
  font-size: ${typography.size.s1}rem;
  color: ${(props) => props.theme.black};
  width: 100%;
  margin: 0;
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Image = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  align-self: center;
  top: 20px;
`;

export const MoreOpitions = styled(MdMoreHoriz)`
  color: ${(props) => props.theme.black};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 1;
  opacity: 0;
  transition: 150ms;

  padding: 0 4px;
  box-sizing: initial;
  border-radius: 3px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
