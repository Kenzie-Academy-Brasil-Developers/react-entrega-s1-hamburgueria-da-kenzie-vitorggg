import "./index.css";
import { useState } from "react";
import Button from "../Button";

const InputSearch = ({ setFilteredProducts, products }) => {
  const [typedSearch, setTypedSearch] = useState("");

  function showProducts(value) {
    setFilteredProducts(
      products.filter((elem) => {
        return (
          elem.name.toLowerCase().includes(value.toLowerCase()) ||
          elem.category.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  }

  return (
    <div className="searchBar">
      <input
        onChange={(e) => showProducts(e.target.value)}
        placeholder="Digitar pesquisa"
        type="text"
      />
      <Button
        // onClick={() => showProducts(typedSearch)}
        className="button-search"
      >
        Pesquisar
      </Button>
    </div>
  );
};

export default InputSearch;
