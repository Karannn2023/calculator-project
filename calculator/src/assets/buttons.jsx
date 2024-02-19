import Input from "./input";

function buttons({ items, handleOnChange, values }) {
  return (
    <>
      <div className="container">
        <center className="calculator">
          <Input point={values}></Input>
          {items.map((item) => (
            <button key={item} onClick={handleOnChange}>
              {item}
            </button>
          ))}
        </center>
      </div>
    </>
  );
}
export default buttons;
