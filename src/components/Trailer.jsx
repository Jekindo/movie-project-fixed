import React from "react";
import PropTypes from "prop-types";
import { URL_YOUTUBE } from "../const";

/**
 * Represents a trailer
 * @param {string} trailer - the address of trailer for YouTube api
 */
export default function Trailer({ trailer }) {
  return (
    <div className="trailer-frame">
      <iframe
        title={URL_YOUTUBE + trailer}
        src={URL_YOUTUBE + trailer}
        allowFullScreen
      />
    </div>
  );
}

Trailer.propTypes = {
  trailer: PropTypes.string.isRequired,
};
