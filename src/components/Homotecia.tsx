import React from "react";
interface props {
    setValue: Function;
}
const Homotecia = (props:props) => {
    return (
      <div>
        <div>
          constante: 
          <input
            className="border-solid border-2 border-blue-500 m-2 w-20"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                props.setValue(e.target.value);
            }}
          />
        </div>
      </div>
    );
  };
  export default Homotecia;
  