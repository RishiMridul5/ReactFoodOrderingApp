import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { ShowCartProvider } from "./store/showCart-ctx";
function App() {
  return (
    <div className="App">
      <ShowCartProvider>
        <Cart />
        <Header />
      </ShowCartProvider>

      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
