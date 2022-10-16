import React, { useEffect, useState } from "react";
import Row from "./Row";
import Choose from "./Choose";
import { rotationX } from "../utilities/transformations";

interface props {
  setX: any;
  setY: any;
  Y: Array<number>;
  X: Array<number>;
  increment: Function;
}
const Coords = (props: props) => {
  const [updateX, setUpdateX] = useState<[number, number]>();
  const [updateY, setUpdateY] = useState<[number, number]>();
  const [removeCoord, setRemoveCoord] = useState();
  const [coords, setCoords] = useState<Array<JSX.Element | null>>([]);
  const [showOptions, setShowOptions] = useState(false);
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
        if (i == removeCoord) return null;
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
    <div className="">
      <Choose showOptions={showOptions} setShowOptions={setShowOptions} />
      <div>Set coordinates</div>
      <button
        className="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        onClick={() => {
          rotationX(props.X, props.Y, 45, props.setX, props.setY);
        }}
      >
        transform
      </button>
      <button
        className="w-14 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        onClick={addRow}
      >
        Add
      </button>

      {coords}
    </div>
  );
};
export default Coords;
