import React, { useState } from "react";
import Plot from "react-plotly.js";
import Coords from "./components/Coords";
import "./App.css";

function App() {
  const [xarray, setXarray] = useState<Array<number>>([]);
  const [yarray, setYarray] = useState<Array<number>>([]);
  const [pointX, setPointX] = useState<Array<number>>([]);
  const [pointY, setPointY] = useState(0);
  const [figureX, setFigureX] = useState([]);
  const [figureY, setFigureY] = useState([]);
  const incrementArrays = (): number => {
    setXarray([...xarray, NaN]);
    setYarray([...yarray, NaN]);
    return xarray.length;
  };

  const analyzex = xarray.map((c) => {
    if (Number.isNaN(c)) return 0;
    return Math.abs(c);
  });
  const analyzey = yarray.map((c) => {
    if (Number.isNaN(c)) return 0;
    return Math.abs(c);
  });
  const edge = 2.5 * Math.max(...analyzex, ...analyzey, 7.5);
  const basisX = [0, 0, 0, 1];
  const basisY = [0, 1, 0, 0];
  const centerX = [pointX];
  const centerY = [pointY];

  return (
    <div>
      <h1 className="mt-8 text-center text-3xl">
        Grupo 1: Homotecia y semejanza
      </h1>
      <div className="App flex flex-row items-center justify-center">
        <Coords
          setX={setXarray}
          X={xarray}
          setY={setYarray}
          Y={yarray}
          increment={incrementArrays}
          pointX={pointX}
          pointY={pointY}
          setPointX={setPointX}
          setPointY={setPointY}
          figureX={figureX}
          figureY={figureY}
          setFigureX={setFigureX}
          setFigureY={setFigureY}
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
              x: figureX,
              y: figureY,
              name: "figure",
              type: "scatter",
              mode: "lines",
              marker: { color: "purple" },
            },
            {
              x: basisX,
              y: basisY,
              type: "scatter",
              mode: "lines",
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
            {
              name: "input",
              x: xarray,
              y: yarray,
              type: "scatter",
              mode: "lines",
              marker: { color: "red" },
            },
            {
              name: "center",
              x: centerX,
              y: centerY,
              type: "scatter",
              mode: "markers",
              marker: { color: "blue" },
            },
          ]}
          layout={{
            width: 800,
            height: 800,
            xaxis: { range: [-edge, edge], autorange: false },
            yaxis: { range: [-edge, edge], autorange: false },
            title: "",
          }}
        />
      </div>
    </div>
  );
}

export default App;
