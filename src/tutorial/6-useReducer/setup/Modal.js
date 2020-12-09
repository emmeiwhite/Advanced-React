import React, { useEffect } from "react";

const Modal = ({ modalText, closeModal }) => {
  console.log(modalText);

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return <div>{modalText}</div>;
};

export default Modal;
