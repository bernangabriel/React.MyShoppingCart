import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <div className="bg-dark p-3 text-center">
    <span className="text-white h3">{title}</span>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
