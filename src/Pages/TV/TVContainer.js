import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      setTopRated(topRated);
      setAiringToday(airingToday);
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
  console.log(topRated, popular, airingToday, error, loading);
  return (
    <TVPresenter
      topRated={topRated}
      airingToday={airingToday}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(TVContainer);
