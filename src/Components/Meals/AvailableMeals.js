import React from "react";
import style from "./AvailableMeals.module.css";
import { MEALS } from "./MealsData";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const mealsJSX = MEALS.map((meal) => {
    const { id, name, description, price } = meal;
    return (
      <MealItem key={id} name={name} description={description} price={price} />
    );
  });

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsJSX}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
