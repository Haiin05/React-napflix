import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { moviesApi } from "../../api";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      setNowPlaying(nowPlaying);
      setUpcoming(upcoming);
      setPopular(popular);
    };

    try {
      getData();
    } catch {
      setError("Can't find movies information");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(HomeContainer);
