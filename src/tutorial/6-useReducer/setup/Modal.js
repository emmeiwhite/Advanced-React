import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ modalText, closeModal }) => {
  console.log(modalText);

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return <div className="modal-text">{modalText}</div>;
};

export default Modal;
