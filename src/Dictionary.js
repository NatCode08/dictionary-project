import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  //documentation:https://dictionaryapi.dev/

  function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="searchBar">
        <span className="container"> dictionary. </span>
        <form onSubmit={Search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Type the word you are looking for"
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
