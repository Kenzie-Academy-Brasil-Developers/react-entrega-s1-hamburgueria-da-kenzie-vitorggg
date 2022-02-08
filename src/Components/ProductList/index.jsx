import "./index.css";
import Product from "../Product";

const ProductList = ({ products }) => {
  return (
    <ul className="vitrine-list">
      {products.map((prod) => (
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
