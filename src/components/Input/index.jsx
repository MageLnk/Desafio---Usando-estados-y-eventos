const Input = ({ type, value, setValue }) => {
  return (
    <input placeholder={type} value={value} onChange={(e) => setValue(e.target.value)}></input>
  );
};

export default Input;
