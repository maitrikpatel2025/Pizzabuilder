import React from "react";

import "./Pizza.css";
import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

const Pizza = (props) => {
  return (
    <div className="Pizza">
      <PizzaIngredient type="crust" />
      <PizzaIngredient type="sauce" />
      <PizzaIngredient type="cheese" />
      <PizzaIngredient type="pepperoni"/>
      <PizzaIngredient type="mushrooms" />
      <PizzaIngredient type="onion" />
      <PizzaIngredient type="tomoto" />
      <PizzaIngredient type="jalapeno" />
      <PizzaIngredient type="olive" />
    </div>
  );
};

export default Pizza;
