import "./index.css";
import Product from "../Product";

const ProductList = ({ products, filteredProducts }) => {
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
              />
            </li>
          ))}
    </ul>
  );
};

export default ProductList;
