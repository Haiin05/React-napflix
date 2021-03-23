import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isMovie, setIsMovie] = useState(
    props.location.pathname.includes("/movie/")
  );

  useEffect(() => {
    handleDetail();
  }, []);

  const handleDetail = async () => {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = props;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      push("/");
    }

    let result = null;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      setError("Can't find anything.");
    } finally {
      setLoading(false);
      setResult(result);
    }
  };
  console.log(result);
  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default withRouter(DetailContainer);
