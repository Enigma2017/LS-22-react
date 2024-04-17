import { useState, useRef } from "react";
import "./SearchInput.scss";

export const SearchInput = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm("");
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={handleSearchSubmit}>
      <button type="submit" className="btn form__btn">
        <span className="icon-search"></span>
      </button>
      <input
        id="searchInput"
        className="form__input"
        type="search"
        placeholder="Find Your Coffee..."
        value={searchTerm}
        onChange={handleSearchChange}
        ref={inputRef}
      />
    </form>
  );
};
