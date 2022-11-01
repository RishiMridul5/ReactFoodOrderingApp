import style from "./MealItem.module.css";

const MealItem = (props) => {
  const { id, name, description, price } = props;
  return (
    <li  className={style.mealItem} key={id}>
      <div>{name}</div>
      <div>{description}</div>
      <div>Rs {price}</div>
    </li>
  );
};

export default MealItem;
