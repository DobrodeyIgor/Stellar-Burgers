import React from "react";
import styles from "./loader.module.css";
import PropTypes from "prop-types";

export const Loader = ({ size = "default" }) => {
  return (
    <div className={`${styles["loader"]} ${styles[`loader_${size}`]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
