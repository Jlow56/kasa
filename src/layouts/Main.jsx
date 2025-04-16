import React from "react";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ children }) => {
  return <main className="main-container">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;