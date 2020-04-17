import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(3, minmax(245px, 1fr));
  max-width: 800px;
  width: 100%;
  margin-bottom: 5rem;
`;
