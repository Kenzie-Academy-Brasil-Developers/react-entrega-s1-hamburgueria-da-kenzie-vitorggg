import "./index.css";
import InputSearch from "../InputSearch";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <InputSearch />
    </header>
  );
};

export default Header;
