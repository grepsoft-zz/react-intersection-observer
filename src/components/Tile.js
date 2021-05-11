import styled from "styled-components";
import { useEffect, useState } from "react";
import useVisibilityDetector from "../hooks/use-visibility-detector";

const Image = styled.div`
  width: 8rem;
  height: 12rem;
  border: 1px solid black;
  border-radius: 4px;
  background: #${(props) => props.color};
  opacity: ${(props) => (props.visible ? 1 : 0.1)};
`;

function Tile() {
  const [color, setColor] = useState("#000");
  const { isVisible, visibilityRef } = useVisibilityDetector();
  useEffect(() => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
  }, []);

  return <Image ref={visibilityRef} visible={isVisible} color={color} />;
}

export default Tile;
