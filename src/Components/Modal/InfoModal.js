import React from "react";
import "./InfoModal.css";

const InfoModal = ({ isOpen, message, type = "success", onClose, isLoading = false }) => {
  if (!isOpen) return null;

  const isError = type === "error";
  const isSuccess = type === "success";
  const isLoadingState = type === "loading" || isLoading;
  
  let iconClass, title;
  
  if (isLoadingState) {
    iconClass = "bi-arrow-clockwise loading-icon";
    title = "Logging Out";
  } else if (isError) {
    iconClass = "bi-exclamation-triangle-fill error-icon";
    title = "Error";
  } else {
    iconClass = "bi-check-circle-fill success-icon";
    title = "Success";
  }

  return (
    <div className="info-modal-overlay">
      <div className="info-modal">
        <div className={`info-modal-header ${isError ? 'error-header' : isSuccess ? 'success-header' : 'loading-header'}`}>
          <i className={`bi ${iconClass}`}></i>
          <h3>{title}</h3>
        </div>
        <div className="info-modal-body">
          <p>{message}</p>
        </div>
        {!isLoadingState && (
          <div className="info-modal-footer">
            <button 
              className={`info-modal-btn ${isError ? 'error-btn' : 'success-btn'}`}
              onClick={onClose}
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoModal; 