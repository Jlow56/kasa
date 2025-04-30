import React from "react";
import PropTypes from "prop-types";
import "./Main.scss";

const Main = ({ children }) => {
  return <main className="main-container w1240">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;