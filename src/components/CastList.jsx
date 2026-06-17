import React from "react";
import Cast from "./Cast";
import { Link } from "react-router";
import styled from "styled-components";

export default function CastList({ data }) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration: none;
    }
  `;
  let casts = data.map(function (cast) {
    if (cast.profile_path != null) {
      return (
        <div className="cast-col" key={cast.id}>
          <StyledLink to={"/star/" + cast.id}>
            <Cast cast={cast} />
          </StyledLink>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="cast-section">
      <h3 className="section-title">Casts</h3>
      <div className="cast-grid">{casts}</div>
    </div>
  );
}
