import React, { useEffect } from "react";
import "../App.css";

interface rowprops {
  setUpdateX: Function;
  setUpdateY: Function;
  setRemoveCoord: Function;
  id: number;
}

const Row = (props: rowprops) => {
  useEffect(() => {}, []);
  const drawX = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUpdateX([props.id, Number(e.target.value)]);
  };
  const drawY = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUpdateY([props.id, Number(e.target.value)]);
  };
  const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setRemoveCoord(props.id);
  };
  return (
    <div className="flex flex-row items-center">
      <div>
        <input
          className="border-solid border-2 border-blue-500 m-2 w-20"
          onChange={drawX}
        />
      </div>
      <div>
        <input
          className="border-solid border-2 border-blue-500 m-2 w-20"
          onChange={drawY}
        />
      </div>
      <button
        className="h-8 bg-transparent hover:bg-blue-500 text-red-500	 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
        onClick={remove}
      >
        remove
      </button>
    </div>
  );
};
export default Row;
