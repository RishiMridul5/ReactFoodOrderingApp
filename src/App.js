import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { ShowCartProvider } from "./store/showCart-ctx";
import { CartContextProvider } from "./store/CartContextProvider";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ShowCartProvider>
          <Cart />
          <Header />
        </ShowCartProvider>

        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;
