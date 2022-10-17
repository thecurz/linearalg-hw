import React from "react";

interface option {
  text: string;
  setter: Function;
  show: Function;
}
const Option = ({ text, setter, show }: option) => {
  return (
    <li>
      <div
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        // @ts-ignore
        onClick={() => {
          setter(text); 
          show();
        }}
      >
        {text}
      </div>
    </li>
  );
};

const ChooseFigure = (props: any) => {
  const show = () => {
    props.setShowFigures(!props.showFigures);
  };

  const options: Array<JSX.Element | null> = [];
  props.optionlist.forEach((element: string) => {
    options.push(<Option text={element} setter={props.setter} show = {show} key={element} />);
  });
  return (
    <div className="flex flex-col items-center m-4">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={show}
      >
        Seleccionar figura{" "}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {props.showFigures && (
        <div
          id="dropdown"
          className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {options}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ChooseFigure;