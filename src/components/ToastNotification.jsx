// src/components/ToastNotification.jsx
import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastNotification = ({ show, message, onClose }) => {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast bg="success" onClose={onClose} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Éxito</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
