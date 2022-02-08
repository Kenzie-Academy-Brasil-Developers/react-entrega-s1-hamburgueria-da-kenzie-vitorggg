import "./index.css";
import Button from "../Button";

const InputSearch = () => {
  return (
    <div className="searchBar">
      <input placeholder="Digitar pesquisa" />
      <Button className="button-search">Pesquisar</Button>
    </div>
  );
};

export default InputSearch;
