import { useEffect, useState } from "react";
import Measure from "react-measure";
import delve from "delve";

import "./styles.css";
import Grid from "./components/Grid";

import styled from "styled-components";

const Main = styled.div`
  display: grid;
  justify-content: center;
`;

export default function App() {
  // const [{ width, height }, setState] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   console.log(`${width}, ${height}`);
  // }, [width, height]);

  return (
    <Main>
      <Grid />
    </Main>
    // <Measure
    //   onResize={contentRect => {
    //     setState({
    //       width: delve(contentRect, 'entry.width', 0),
    //       height: delve(contentRect, 'entry.height', 0)
    //     });
    //   }}
    // >
    //   {({ measureRef }) => (
    //     <div ref={measureRef} className="App">
    //       {width},{height}
    //     </div>
    //   )}
    // </Measure>
  );
}
