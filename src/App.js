import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./App.css";
import Modal from "./Components/UI/Modal";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
      <Cart />
    </div>
  );
}

export default App;
