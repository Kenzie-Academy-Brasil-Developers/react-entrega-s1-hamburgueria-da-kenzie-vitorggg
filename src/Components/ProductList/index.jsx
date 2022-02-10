import "./index.css";
import Product from "../Product";

const ProductList = ({
  products,
  filteredProducts,
  setCurrentSale,
  currentSale,
  cartTotal,
  setCartTotal,
}) => {
  return (
    <ul className="vitrine-list">
      {filteredProducts.length === 0
        ? products.map((prod) => (
            <li key={prod.id}>
              <Product
                name={prod.name}
                category={prod.category}
                price={prod.price}
                img={prod.img}
                prod={prod}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            </li>
          ))
        : filteredProducts.map((prod) => (
            <li key={prod.id}>
              <Product
                name={prod.name}
                category={prod.category}
                price={prod.price}
                img={prod.img}
                prod={prod}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
              />
            </li>
          ))}
    </ul>
  );
};

export default ProductList;
