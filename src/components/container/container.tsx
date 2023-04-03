// @ts-nocheck
import React from "react";
import styles from "./container.module.css";
import PropTypes from "prop-types";

export const Container = ({ children, component = "div", className = "" }) => {
  const Element = component;
  return (
    <Element className={`${styles.container} ${className}`}>{children}</Element>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
  className: PropTypes.string,
};
