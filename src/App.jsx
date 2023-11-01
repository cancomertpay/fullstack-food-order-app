import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <CartProvider>
      <UserProgressContextProvider>
        <Header />
        <main>
          <Meals />
          <Cart />
          <Checkout />
        </main>
      </UserProgressContextProvider>
    </CartProvider>
  );
}

export default App;
