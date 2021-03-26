import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find movies information");
    } finally {
      setLoading(false);
    }
  };

  const updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    setSearchTerm(value);
  };
  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default withRouter(SearchContainer);
