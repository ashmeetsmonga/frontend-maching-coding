import React, { FC } from "react";

import "./modal.css";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ showModal, closeModal, children }) => {
  return showModal && <div className="modal-container">{children}</div>;
};

export default Modal;
