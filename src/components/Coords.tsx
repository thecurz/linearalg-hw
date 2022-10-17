import React, { useEffect, useState } from "react";
import Row from "./Row";
import Choose from "./Choose";
import ChooseFigure from "./ChooseFigure";
import { rotationX, reflection, homotecia } from "../utilities/transformations";
import Rotation from "./Rotation";
import Homotecia from "./Homotecia";
import "../App.css";
interface props {
  setX: any;
  setY: any;
  Y: Array<number>;
  X: Array<number>;
  increment: Function;
  [key: string]: any;
}
const Coords = (props: props) => {
  const [updateX, setUpdateX] = useState<[number, number]>();
  const [updateY, setUpdateY] = useState<[number, number]>();
  const [removeCoord, setRemoveCoord] = useState();
  const [coords, setCoords] = useState<Array<JSX.Element | null>>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showFigures, setShowFigures] = useState(false);
  const [choice, setChoice] = useState("");
  const [figure, setFigure] = useState("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (figure !== "") {
      props.setFigureX([0, 1.6, 5, 1.8, 3, 0, -3, -1.8, -5, -1.6, 0]);
      props.setFigureY([5, 2, 2, -0.5, -5, -2, -5, -0.5, 2, 2, 5]);
    }
  }, [figure]);
  useEffect(() => {
    if (updateX !== undefined) {
      const newX = props.X.map((c, i) => {
        if (i === updateX[0]) return updateX[1];
        else return c;
      });
      props.setX(newX);
    }
    if (updateY !== undefined) {
      const newY = props.Y.map((c, i) => {
        if (i === updateY[0]) return updateY[1];
        else return c;
      });
      props.setY(newY);
    }
    if (removeCoord !== undefined) {
      const newCoords = coords.map((c, i) => {
        if (i === removeCoord) return null;
        else return c;
      });
      setCoords(newCoords);
    }
  }, [updateX, updateY, removeCoord]);
  const addRow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const index = props.increment();
    const newprops = {
      id: index,
      key: index,
      setUpdateX: setUpdateX,
      setUpdateY: setUpdateY,
      setRemoveCoord: setRemoveCoord,
    };
    const row = <Row {...newprops} />;
    setCoords([...coords, row]);
  };

  return (
    <div>
      <ChooseFigure
        optionlist={["estrella", " "]}
        showFigures={showFigures}
        setShowFigures={setShowFigures}
        setter={setFigure}
      />
      <Choose
        optionlist={["homotecia", "rotacion", "reflexion-x", "reflexion-y"]}
        setter={setChoice}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
      {choice === "rotacion" && (
        <Rotation
          setValue={setValue}
          setPointX={props.setPointX}
          setPointY={props.setPointY}
        />
      )}
      {choice === "homotecia" && (
        <Homotecia
          setValue={setValue}
          setPointX={props.setPointX}
          setPointY={props.setPointY}
        />
      )}
      <div>Ingresar coordenadas</div>
      <button
        className="w-14 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        onClick={addRow}
      >
        Add
      </button>

      {coords}
      <button
        className="block h-10 bg-transparent hover:bg-green-500 text-green-700 font-extrabold hover:text-white m-2 py-1 px-2 border border-green-500 hover:border-transparent rounded"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          if (choice === "rotacion") {
            rotationX(
              props.figureX,
              props.figureY,
              value,
              props.setFigureX,
              props.setFigureY,
              [props.pointX, props.pointY]
            );
            rotationX(props.X, props.Y, value, props.setX, props.setY, [
              props.pointX,
              props.pointY,
            ]);
          }
          if (choice === "homotecia") {
            homotecia(
              props.figureX,
              props.figureY,
              value,
              props.setFigureX,
              props.setFigureY,
              [props.pointX, props.pointY]
            );
            homotecia(props.X, props.Y, value, props.setX, props.setY, [
              props.pointX,
              props.pointY,
            ]);
          }
          if (choice === "reflexion-x") {
            reflection(
              props.figureX,
              props.figureY,
              true,
              props.setFigureX,
              props.setFigureY
            );
            reflection(props.X, props.Y, true, props.setX, props.setY);
          }
          if (choice === "reflexion-y") {
            reflection(
              props.figureX,
              props.figureY,
              false,
              props.setFigureX,
              props.setFigureY
            );
            reflection(props.X, props.Y, false, props.setX, props.setY);
          }
        }}
      >
        transform
      </button>
    </div>
  );
};
export default Coords;
