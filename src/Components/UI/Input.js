import style from "./Input.module.css";
const Input = ({ label, inputElProps }) => {
  return (
    <div className={style.input}>
      <label style={{ color: "brown" }} htmlFor={inputElProps.id}>
        {label}
      </label>
      <input {...inputElProps} />
    </div>
  );
};

export default Input;
