import React, { Component } from "react";
import { MovieList, DisplayMsg } from "../components";
import { connect } from "react-redux";
import { fetchMovieList, searchMovieList } from "../actions";

class MovieContainer extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    if (params.keyword) {
      dispatch(searchMovieList(params.keyword));
    } else {
      dispatch(fetchMovieList());
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    if (nextProps.params.keyword !== this.props.params.keyword) {
      if (nextProps.params.keyword) {
        dispatch(searchMovieList(nextProps.params.keyword));
      } else {
        dispatch(fetchMovieList());
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.movies !== nextProps.movies ||
      this.props.isFetching !== nextProps.isFetching ||
      this.props.keyword !== nextProps.keyword
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { movies, isFetching, keyword } = this.props;

    if (isFetching) {
      return <p>loading...</p>;
    }
    if (movies.length > 0) {
      return <MovieList movies={movies} />;
    }
    return (
      <DisplayMsg
        message={
          keyword
            ? `No results found for "${keyword}".`
            : "Sorry, no movies could be found."
        }
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { movieList } = state;
  const { items: movies, isFetching } = movieList;

  const keyword = ownProps.params.keyword;
  return { movies, isFetching, keyword };
}

export default connect(mapStateToProps)(MovieContainer);
