import React, { Component } from "react";
import Poster from "./Poster";
import { Link } from "react-router";
import { Grid, Row, Col } from "react-bootstrap";

export default class MovieList extends Component {
  render() {
    const gridStyle = {
      padding: "0 15px",
      maxWidth: "1200px",
      margin: "0 auto",
    };

    const rowStyle = {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 -10px",
    };

    const colStyle = {
      padding: "10px",
      boxSizing: "border-box",
    };

    let movies = this.props.movies
      .filter(function (movie) {
        return movie.poster_path != null;
      })
      .map(function (movie) {
        return (
          <Col xs={6} sm={4} md={3} key={movie.id} style={colStyle}>
            <Link to={"/movie/" + movie.id}>
              <Poster
                info
                id={movie.id}
                path={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                release_date={movie.release_date}
                responsive
              />
            </Link>
          </Col>
        );
      });

    return (
      <Grid fluid={false} style={gridStyle}>
        <Row style={rowStyle}>{movies}</Row>
      </Grid>
    );
  }
}
