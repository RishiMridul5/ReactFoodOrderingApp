import style from "./MealItemForm.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { CartContext } from "../../../store/cart-ctx";
import { useState, useContext, useEffect } from "react";

const MealItemForm = ({ mealData }) => {
  const [amount, setAmount] = useState(1);
  const [amountInputValid, setAmountInputValid] = useState(true);
  const { addItem } = useContext(CartContext);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // For amount input field validity
  useEffect(() => {
    if (+amount < 1 || +amount > 5) setAmountInputValid(false);
    else setAmountInputValid(true);
  }, [amount]);

  function submitHandler(e) {
    e.preventDefault();

    if (amountInputValid) {
      const newItem = {
        amount: amount,
        ...mealData,
      };
      addItem(newItem); // add item to Cart
    }
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        inputElProps={{
          onChange: handleAmountChange,
          type: "number",
          id: "amt",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className="btn solid primary" />
      {!amountInputValid ? <p>Enter a valid amount</p> : ""}
    </form>
  );
};

export default MealItemForm;
