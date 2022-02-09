import "./index.css";
import Button from "../Button";

const CartProduct = ({ name, category, price, img }) => {
  return (
    <div className="cart-item">
      <figure>
        <img alt={name} src={img} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <Button className="cart-prod-button">Remover</Button>
    </div>
  );
};

export default CartProduct;
