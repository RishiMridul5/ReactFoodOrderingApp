import style from './Meals.module.css'
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <main className={style.main}>
      <MealsSummary />
      <AvailableMeals />
    </main>
  );
};

export default Meals;
