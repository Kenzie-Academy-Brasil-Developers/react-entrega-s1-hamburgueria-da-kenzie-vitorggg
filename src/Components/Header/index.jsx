import "./index.css";
import InputSearch from "../InputSearch";
import Logo from "../Logo";

const Header = ({ setFilteredProducts, products }) => {
  return (
    <header className="app-header">
      <div className="logo">
        <Logo />
      </div>
      <div className="logo">
        <InputSearch
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
      </div>
    </header>
  );
};

export default Header;
