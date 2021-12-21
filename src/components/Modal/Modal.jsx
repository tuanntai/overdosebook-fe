import React, { useCallback, useEffect, useRef } from "react";

const Modal = ({ showModal, setShowModal, children, styles }) => {
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal && (
        <div
          ref={modalRef}
          onClick={closeModal}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 10,
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...styles,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export { Modal };
