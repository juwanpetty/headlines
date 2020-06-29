import styled from "styled-components";

export const Container = styled.a`
  display: grid;
  grid-template-columns: auto 75px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.gray7};
    padding-bottom: 16px;
  }
`;

export const Source = styled.span`
  text-transform: uppercase;
  margin: 0;
  font-size: 12px;
  color: fafafa;
  color: #b7b7b7;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.black};
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
  border: 1px solid ${(props) => props.theme.gray7};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Remove = styled.p`
  color: ${(props) => props.theme.black};
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
