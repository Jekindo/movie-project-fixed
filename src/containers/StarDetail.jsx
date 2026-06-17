import React, { Component } from "react";
import { StarInfo, Poster, MovieList, DisplayMsg } from "../components";
import { Grid, Row, Col } from "react-bootstrap/lib";
import { connect } from "react-redux";
import { fetchStarDetail, fetchMovieList } from "../actions";

class StarDetail extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStarDetail(this.props.params.id));
    dispatch(fetchMovieList(this.props.params.id));
  }

  render() {
    const { star, movies } = this.props;

    if (star.hasOwnProperty("id")) {
      return (
        <Grid fluid={false}>
          <Row style={{ paddingTop: "20px" }}>
            <Col xs={12} sm={6} md={4}>
              <Poster id={star.id} path={star.profile_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <StarInfo star={star} />
            </Col>
          </Row>
          <div className="known-for-section">
            <h3 className="section-title">Known For</h3>
            <MovieList movies={movies.slice(0, 4)} />
          </div>
        </Grid>
      );
    }
    return <DisplayMsg message="Sorry, this person could not be found." />;
  }
}

function mapStateToProps(state) {
  const { starDetail, movieList } = state;
  const { item: star } = starDetail;
  const { items: movies } = movieList;

  return { star, movies };
}

export default connect(mapStateToProps)(StarDetail);
