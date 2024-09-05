import React from 'react';

export default function Confirm({ message, onCancel, onConfirm }) {
    return (
      <div className="confirm-modal">
        <p>{message}</p>
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={onConfirm}>Confirmar</button>
      </div>
    );
  }
  