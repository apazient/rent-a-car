import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/Global/globalSlice";
import { ModalOverlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        dispatch(closeModal());
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(closeModal());
        }
      }}
    >
      {children}
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
