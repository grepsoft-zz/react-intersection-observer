import styled from "styled-components";
import Tile from "./Tile";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 8px;
  column-gap: 8px;
`;

function Grid() {
  return (
    <Container>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Container>
  );
}

export default Grid;
