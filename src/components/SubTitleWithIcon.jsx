import React from 'react';
import { Glyphicon } from 'react-bootstrap'

export default function SubTitleWithIcon(props){
  return(
      <h4 className={`meta-badge meta-badge--${props.icon}`}>
        <Glyphicon glyph={props.icon} /> {props.title}
      </h4>
  );
}
