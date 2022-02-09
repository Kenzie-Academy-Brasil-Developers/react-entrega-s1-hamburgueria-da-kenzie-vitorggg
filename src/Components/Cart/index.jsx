import "./index.css";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <section className="cart-panel">
      <div className="cart-title">
        <span>Carrinho de Compras</span>
      </div>
      <div className="cart-content">
        <h3>A sua sacola está vazia</h3>
        <p>Adicione itens</p>
      </div>
    </section>
  );
};

export default Cart;
