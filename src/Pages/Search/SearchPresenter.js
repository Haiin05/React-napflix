import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../../Components/Section/Section";
import Poster from "../../Components/Poster/Poster";
import Loader from "../../Components/Loader/Loader";
import Message from "../../Components/Message/Message";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  updateTerm,
  loading,
  error,
}) => (
  <>
    <Helmet>
      <title>Search | Napflix</title>
    </Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults?.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
              {tvResults?.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {error && <Message text={error} color="tomato" />}
          {movieResults &&
            tvResults &&
            movieResults.length === 0 &&
            tvResults.length === 0 && <Message text="Not Found" color="grey" />}
        </>
      )}
    </Container>
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;
