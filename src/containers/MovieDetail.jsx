import React, { Component } from "react";
import { CastList, TrailerList, DisplayMsg } from "../components";
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from "../const";
import { Grid, Row, Col } from "react-bootstrap/lib";
import { MovieInfo, Poster } from "../components";
import { connect } from "react-redux";
import { fetchMovieDetail, fetchCastList, fetchTrailerList } from "../actions";

class MovieDetail extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovieDetail(this.props.params.id));
    dispatch(fetchCastList(this.props.params.id));
    dispatch(fetchTrailerList(this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    if (nextProps.params.id && this.props.params.id !== nextProps.params.id) {
      dispatch(fetchMovieDetail(nextProps.params.id));
      dispatch(fetchCastList(nextProps.params.id));
      dispatch(fetchTrailerList(nextProps.params.id));
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //     if(this.props.movie.id !== nextProps.movie.id) {
  //       //console.log('shouldComponentUpdate');
  //       return true;
  //     }
  //     return false;
  // }

  render() {
    const {
      movie,
      casts,
      trailers,
      isFetching_movie,
      isFetching_casts,
      isFetching_trailers,
    } = this.props;

    if (isFetching_movie || isFetching_casts || isFetching_trailers) {
      return <p>loading...</p>;
    }
    if (movie.hasOwnProperty("id")) {
      return (
        <Grid fluid={false} style={{ paddingTop: "20px" }}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Poster id={movie.id} path={movie.poster_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <MovieInfo movie={movie} />
              <CastList data={casts.slice(0, CAST_MAX_NUM)} />
            </Col>
          </Row>
          <TrailerList data={trailers.slice(0, TRAILER_MAX_NUM)} />
        </Grid>
      );
    }
    return <DisplayMsg message="Sorry, this movie could not be found." />;
  }
}

function mapStateToProps(state) {
  const { movieDetail, castList, trailerList } = state;
  const { isFetching: isFetching_movie, item: movie, error_movie } = movieDetail;
  const { isFetching: isFetching_casts, items: casts, error_casts } = castList;
  const { isFetching: isFetching_trailers, items: trailers, error_trailers } = trailerList;

  return {
    isFetching_movie,
    movie,
    error_movie,
    isFetching_casts,
    casts,
    error_casts,
    isFetching_trailers,
    trailers,
    error_trailers,
  };
}

export default connect(mapStateToProps)(MovieDetail);
