import React, { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

function MealItem({ meal }) {
  const cartContext = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartContext.addItem(meal);
  };
  
  return (
    <li className={"meal-item"}>
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <div>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </p>
        <p className="meal-item-description">{meal.description}</p>
      </div>
      <div className="meal-item-actions">
        <Button onClick={handleAddMealToCart} className="button">
          Add to Cart
        </Button>
      </div>
    </li>
  );
}

export default MealItem;
