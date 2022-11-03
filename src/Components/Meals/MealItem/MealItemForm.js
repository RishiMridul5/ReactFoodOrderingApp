import style from "./MealItemForm.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { CartContext } from "../../../store/cart-ctx";
import { useState, useContext } from "react";

const MealItemForm = ({ mealData }) => {
  const [amount, setAmount] = useState(1);
  const [amountInputValid, setAmountInputValid] = useState(true)
  const { addItem } = useContext(CartContext);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  function submitHandler(e) {
    e.preventDefault();
    const newItem = {
      amount: amount,
      ...mealData,
    };
    addItem(newItem); // add item to Cart
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        inputElProps={{
          onChange: handleAmountChange,
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
