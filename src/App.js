import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Components/Button";
import InputSearch from "./Components/InputSearch";
import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import CartProduct from "./Components/CartProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

  console.log(currentSale);

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <main>
        <section className="app-section">
          <ProductList
            products={products}
            filteredProducts={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </section>
        <aside>
          <Cart currentSale={currentSale} />
        </aside>
      </main>
    </div>
  );
}

export default App;
