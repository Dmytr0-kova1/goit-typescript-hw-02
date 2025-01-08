import { useState } from "react";
import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(query);
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          value={query}
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          <CiSearch size="16" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
