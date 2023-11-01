import React, { useContext } from "react";
import HeaderLogo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {
  const cartContext = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header>
      <div id="main-header">
        <div id="title">
          <img src={HeaderLogo} alt="" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <Button onClick={handleShowCart} className={"text-button"}>Cart({totalCartItems})</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
