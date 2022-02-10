import "./index.css";
import Button from "../Button";

const CartProduct = ({
  name,
  category,
  img,
  prod,
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) => {
  const removeProduct = (item) => {
    setCartTotal(Number(cartTotal - item.price).toFixed(2));
    setCurrentSale(currentSale.filter((prod) => prod !== item));
  };

  return (
    <div className="cart-item">
      <figure>
        <img alt={name} src={img} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <Button onClick={() => removeProduct(prod)} className="cart-prod-button">
        Remover
      </Button>
    </div>
  );
};

export default CartProduct;
