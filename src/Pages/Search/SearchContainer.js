import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [apis, setApis] = useState({
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: null,
  });
  const { movieResults, tvResults, searchTerm, error, loading } = apis;

  const handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  const searchByTerm = async () => {
    setApis({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setApis({ movieResults, tvResults });
    } catch {
      setApis({ error: "Can't find movies information" });
    } finally {
      setApis({ loading: false });
    }
  };
  console.log(movieResults, tvResults, searchTerm, error, loading);
  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(SearchContainer);
