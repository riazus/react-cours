function InputNum({ count, setCount }) {
  return (
    <input
      type="number"
      value={count}
      onChange={(e) => setCount(e.target.value)}
    ></input>
  );
}

export default InputNum;
