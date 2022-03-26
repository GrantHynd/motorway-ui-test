import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./assets/modal.css";

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function ImageModal({
  isModalOpen,
  onClose,
  title,
  children,
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  function closeModal(e: React.MouseEvent) {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  const modalContent = (
    <div ref={modalRef} className="modal" onClick={(e) => closeModal(e)}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close-button" onClick={() => onClose()}>
            Close
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
  return isModalOpen
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById("root") as Element
      )
    : null;
}
