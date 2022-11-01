import style from "./MealItemForm.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
const MealItemForm = () => {
  return (
    <form className={style.form}>
      <Input
        label="Amount"
        inputElProps={{
          type: "number",
          id: "amt",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className="btn solid primary" />
    </form>
  );
};

export default MealItemForm;
