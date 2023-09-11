import React from 'react';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm, message }) => {
  return (
    <div className={`confirmation-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
