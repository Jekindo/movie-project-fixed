import React from "react";
import { Link } from "react-router";

export default function DisplayMsg(props) {
  const message = props.hasOwnProperty("message")
    ? props.message
    : "Sorry, we couldn't find what you're looking for.";

  return (
    <div className="display-msg">
      <h3>{message}</h3>
      <Link to="/" className="display-msg__link">
        Back to Home
      </Link>
    </div>
  );
}
