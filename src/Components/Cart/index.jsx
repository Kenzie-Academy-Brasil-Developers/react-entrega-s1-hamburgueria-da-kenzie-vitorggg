import "./index.css";
import CartProduct from "../CartProduct";
import Button from "../Button";

const Cart = ({ currentSale, setCurrentSale, cartTotal, setCartTotal }) => {
  const resetCart = () => {
    setCurrentSale([]);
  };

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
                  prod={prod}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                  cartTotal={cartTotal}
                  setCartTotal={setCartTotal}
                />
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <div>
              <p>Total</p>
              <span>R$ {String(cartTotal).replace(".", ",")}</span>
            </div>
            <Button onClick={resetCart} className="button-remove-all">
              Remover todos
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
