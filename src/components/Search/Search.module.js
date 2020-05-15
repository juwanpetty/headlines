import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { typography, spacing, color } from "../../constants/styles";

export const Container = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  padding: 0 45px;
  border: 1px solid ${color.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  margin-bottom: 5rem;

  transition: box-shadow 150ms;

  ${({ isFocus }) =>
    isFocus
      ? `box-shadow: 0 0 0 5px #007aff;`
      : `box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);`}
`;

export const SearchInput = styled.input`
  font-size: ${typography.size.s2}rem;
  color: ${color.gray9};
  width: 100%;
  border: none;
  padding: ${spacing.padding.small}px ${spacing.padding.xmedium}px;
  padding-left: ${spacing.padding.xsmall}px;
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0%;
  right: 0;
  height: 100%;
  border-top-left-radius: ${spacing.borderRadius.small}px;
  border-bottom-left-radius: ${spacing.borderRadius.small}px;
  padding: 0 ${spacing.padding.small}px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchButtonIcon = styled(FiSearch)`
  font-size: ${typography.size.m2}rem;
  color: ${color.gray8};
`;

export const SearchEngine = styled.label`
  position: absolute;
  width: 40px;
  height: 31px;
  top: 5px;
  left: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;
