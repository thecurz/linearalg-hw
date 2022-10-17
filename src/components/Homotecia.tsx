import React from "react";
interface props {
  setValue: Function;
  setPointX: Function;
  setPointY: Function;
}
const Homotecia = (props: props) => {
  return (
    <div>
      <div>
        constante:
        <input
          className="block border-solid border-2 border-blue-500 m-2 w-20"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setValue(Number(e.target.value));
          }}
        />
      </div>
      <div>
        centro:
        <input
          placeholder="x"
          className="block border-solid border-2 border-blue-500 m-2 w-20"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setPointX(Number(e.target.value));
          }}
        />
      </div>
      <input
        placeholder="y"
        className="border-solid border-2 border-blue-500 m-2 w-20"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.setPointY(Number(e.target.value));
        }}
      />
    </div>
  );
};
export default Homotecia;
