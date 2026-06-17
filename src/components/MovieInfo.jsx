import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'

export default function MovieInfo(props){
    return(
      <div className="movie-info">
        <Row>
          <Title title={props.movie.title} />
        </Row>
        <Row className="meta-row">
          <Col xs={4} sm={3}>
            <SubTitleWithIcon icon={'star'} title={Number(props.movie.vote_average).toFixed(1)} />
          </Col>
          <Col xs={4} sm={3}>
            <SubTitleWithIcon icon={'heart'} title={props.movie.vote_count} />
          </Col>
          <Col xs={4} sm={3}>
            <SubTitle title={props.movie.release_date.substring(0,4)} />
          </Col>
        </Row>
        <Row>
          <Description category={'Overview'} description={props.movie.overview} />
        </Row>
      </div>
    );
}
