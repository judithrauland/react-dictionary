import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import ImagesResult from "./ImagesResult";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [imagesBank, setImagesBank] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelResponse(response) {
    setImagesBank(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f91700001000001d81a7b626f684e1bb45035b5dc7b314b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="dict-question">What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
        <ImagesResult image={imagesBank} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
