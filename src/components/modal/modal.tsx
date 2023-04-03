// @ts-nocheck
import React, { Fragment } from "react";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";

export const Modal = ({ title = "", open, children, onClose }) => {
  if (!open) {
    return null;
  }
  const modalRootEl = document.getElementById("modal-root");

  const stopPropagationHandler = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <Fragment>
      <ModalOverlay onClose={onClose}>
        <div onClick={stopPropagationHandler} className={styles["modal"]}>
          <div className={styles["modal__header"]}>
            <span className='text text_type_main-large'>{title}</span>
            <button className={styles["modal__exit-button"]} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          {children}
        </div>
      </ModalOverlay>
    </Fragment>,
    modalRootEl
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
};
