import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;

  & > div:first-child {
    width: 67px;
    height: 48px;
    border-radius: 3px;
    background: ${(props) => props.theme.gray7};
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & > div {
      width: 60px;
      height: 15px;
      background: ${(props) => props.theme.gray7};

      &:last-child {
        width: 30px;
      }
    }
  }
`;
