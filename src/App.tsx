import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Coords from "./components/Coords";
import "./App.css";

function App() {
  const [xarray, setXarray] = useState<Array<number>>([]);
  const [yarray, setYarray] = useState<Array<number>>([]);
  const incrementArrays = (): number => {
    setXarray([...xarray, NaN]);
    setYarray([...yarray, NaN]);
    return xarray.length;
  };
  const analyzex = xarray.map((c) => {
      if (Number.isNaN(c)) return 0;
      return c;
    });
  const analyzey = yarray.map((c) => {
      if (Number.isNaN(c)) return 0;
      return c;
    });
  const edge = 1.5 * Math.max(...analyzex, ...analyzey, 7.5);
  const basisX = [0, 1];
  const basisY = [1, 0];
  return (
    <div className="App flex flex-row items-center">
      <Coords
        setX={setXarray}
        X={xarray}
        setY={setYarray}
        Y={yarray}
        increment={incrementArrays}
      />
      <Plot
        data={[
          {
            name: "basis",
            x: basisX,
            y: basisY,
            type: "scatter",
            mode: "markers",
            marker: { color: "green" },
          },
          {
            name: "input",
            x: xarray,
            y: yarray,
            type: "scatter",
            mode: "markers",
            marker: { color: "red" },
          },
        ]}
        layout={{
          width: 620,
          height: 540,
          xaxis: { range: [-edge, edge] },
          yaxis: { range: [-edge, edge] },
          title: "",
        }}
      />
    </div>
  );
}

export default App;
