import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

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
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        </section>
        <aside>
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
