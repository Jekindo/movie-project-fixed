import React from "react";
import Trailer from "./Trailer";

export default function TrailerList({ data }) {
  const trailers = data.map(function (trailer) {
    return (
      <div className="trailer-col" key={trailer.id}>
        <Trailer trailer={trailer.key} />
      </div>
    );
  });

  if (trailers.length !== 0) {
    return (
      <div className="trailer-section">
        <h3 className="section-title">Trailers</h3>
        <div className="trailer-grid">{trailers}</div>
      </div>
    );
  } else return null;
}
