import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Components/Button";
import InputSearch from "./Components/InputSearch";
import Logo from "./Components/Logo";
import Header from "./Components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
