import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const { id, name, description, price } = props;
  return (
    <li className={style.mealItem} key={id}>
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div>Rs {price}</div>
      </div>

      <MealItemForm />
    </li>
  );
};

export default MealItem;
