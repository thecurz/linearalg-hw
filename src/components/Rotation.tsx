interface props {
    setValue: Function;
}
const Rotation = (props:props) => {
  return (
    <div>
      <div>
        Ángulo (sexagesimal): 
        <input
          className="border-solid border-2 border-blue-500 m-2 w-20"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setValue(e.target.value);
            console.log('afdsjfhu')
        }}
        />
      </div>
    </div>
  );
};
export default Rotation;
