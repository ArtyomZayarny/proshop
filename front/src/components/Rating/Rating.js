import React from "react";
import PropTypes from "prop-types";
import Stars from "./Stars";

function Rating({ color, text, value }) {
  return (
    <div className="rating">
      <Stars value={value} />
      <span>{text && text}</span>
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
