import React from "react";
import "./ModalContacts.css";

function ModalContacts({ handleDelete, handleCancelar }) {
  return (
    <div className="confirm-modal shadow">
      <div className="modal-info text-white">
        <h5 className="text-danger">Deseja excluir o contato selecionado?</h5>
        <p>se eliminar não voltará a ver este registro</p>
      </div>
      <div className="modal-button">
        <button className="btn btn-success ms-2 shadow fw-bold" onClick={handleDelete}>
          Confirmar
        </button>
        <button className="btn btn-danger ms-2 shadow fw-bold" onClick={handleCancelar}>
          {" "}
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ModalContacts;