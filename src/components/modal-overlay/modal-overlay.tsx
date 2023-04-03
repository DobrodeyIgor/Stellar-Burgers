// @ts-nocheck
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

export const ModalOverlay = ({ children, onClose }) => {
  useEffect(() => {
    const escListener = ({ key }) => {
      if (key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", escListener);
    return () => {
      window.removeEventListener("keydown", escListener);
    };
  }, []);

  return (
    <div onClick={onClose} className={styles["overlay"]}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
