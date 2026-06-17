import React from 'react';

export default function Description(props){
  return(
    <div className="detail-description">
      <h3 className="section-title">{props.category}</h3>
      <p>{props.description}</p>
    </div>
  );
}
