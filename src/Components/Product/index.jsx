import "./index.css";
import Button from "../Button";

const Product = ({ name, category, price, img }) => {
  const fixedPrice = () => {
    let priceInitial = Number(price);
    return priceInitial.toFixed(2);
  };

  return (
    <div className="prod-cards">
      <figure>
        <img alt={name} src={img} />
      </figure>
      <h3>{name}</h3>
      <span>{category}</span>
      <p>{"R$ " + fixedPrice()}</p>
      <Button className="button-product">Adicionar</Button>
    </div>
  );
};

export default Product;
