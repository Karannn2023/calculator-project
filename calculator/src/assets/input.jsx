function input({ point }) {
  return (
    <>
      <input type="text" readOnly value={point} key={point}></input>
    </>
  );
}
export default input;
