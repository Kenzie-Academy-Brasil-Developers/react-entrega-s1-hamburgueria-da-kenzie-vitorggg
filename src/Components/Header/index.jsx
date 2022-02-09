import "./index.css";
import InputSearch from "../InputSearch";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Logo />
      </div>
      <div className="logo">
        <InputSearch />
      </div>
    </header>
  );
};

export default Header;
