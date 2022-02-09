import "./index.css";
import CartProduct from "../CartProduct";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <section className="cart-panel">
      <div className="cart-title">
        <span>Carrinho de Compras</span>
      </div>
      {currentSale.length === 0 ? (
        <div className="cart-content">
          <h3>A sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {currentSale.map((prod) => (
              <li key={prod.id}>
                <CartProduct
                  name={prod.name}
                  category={prod.category}
                  price={prod.price}
                  img={prod.img}
                />
              </li>
            ))}
          </ul>
          <div></div>
        </>
      )}
    </section>
  );
};

export default Cart;
