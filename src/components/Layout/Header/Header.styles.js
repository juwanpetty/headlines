import styled from "styled-components";
import { MdSettings } from "react-icons/md";
import { spacing, color, typography } from "../../../constants/styles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding-top: ${spacing.padding.xmedium}px;
  padding-left: ${spacing.padding.xmedium}px;
  padding-right: ${spacing.padding.xmedium}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SettingIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;
  color: ${color.gray8};
`;

const SettingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${spacing.borderRadius.small}px;
  padding: ${spacing.padding.xsmall}px;
  background: transparent;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${color.gray7};
  }
`;

const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;

  h2 {
    font-size: ${typography.size.l2}rem;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}rem;
    line-height: 100%;
    margin: 0;

    &:first-child {
      margin-bottom: 8px;
    }

    &:last-child {
      color: ${color.gray8};
    }
  }
`;

export { Container, SettingIcon, SettingButton, WeatherContainer };
