import React from "react";
import PropTypes from "prop-types";
import { URL_IMG, IMG_SIZE_MEDIUM } from "../const";

export default function Cast({ cast }) {
  return (
    <div className="cast-card">
      <div className="cast-photo">
        <img src={URL_IMG + IMG_SIZE_MEDIUM + cast.profile_path} alt={cast.name} />
      </div>
      <p className="cast-name">{cast.name}</p>
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
