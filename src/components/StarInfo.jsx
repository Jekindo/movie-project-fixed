import React from 'react'
import Description from './Description'
import Title from './Title'
import SubTitleWithIcon from './SubTitleWithIcon'
import {Row, Col} from 'react-bootstrap'

export default function StarInfo(props){
    return(
      <div className="movie-info">
        <Row>
          <Title title={props.star.name} />
        </Row>
        <Row className="meta-row">
          <Col xs={6} sm={4}>
            <SubTitleWithIcon icon={props.star.gender === 1 ? 'woman' : 'man'} title={props.star.gender === 1 ? 'Female' : 'Male'} />
          </Col>
          <Col xs={6} sm={5}>
            <SubTitleWithIcon icon={'calendar'} title={props.star.birthday} />
          </Col>
        </Row>
        <Row>
          <Description category={'Biography'} description={props.star.biography} />
        </Row>
      </div>
    );
}
