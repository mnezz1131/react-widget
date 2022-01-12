import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      //const data is the request
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      //use data to update our results piece of state
      setResults(data.query.search);
    };

    //if term has characters inside we will do a search, it term is true
    // have to do this or put initial value into term useState

    //when you call setTimeout you get back a numeric identifier like 116, can use that identifier to cancel the timout
    //if term is present and there are no results yet
    if (term && !results.length) {
      search();
    } else {

      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 600)
      //cleanup will not be invoked on first render, will be invoked on rerender before the timeout function
      return () => {
        console.log("CLEANUP")
        clearTimeout(timeoutId)
      }
    }
  }, [term]);
  //whenever we rerender component and term has changed run the useEffect function. WIll also run when first rendered
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid}className="item">
        <div className="right floated content">
          <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          
          >Go</a>
        </div>
        <div className="content">
          <div className="header">
              {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    </div>
    )
  })
  
  return (
    <div>
      <h1>search </h1>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}

      </div>
    </div>
  );
}

export default Search;
