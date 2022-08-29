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
      <section>
        <form onSubmit={Search}>
          <span className="container"> dictionary. </span>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="What word do you wanna look up?"
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
