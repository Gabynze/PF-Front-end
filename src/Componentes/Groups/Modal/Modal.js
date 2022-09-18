import React from "react";
import "./Modal.css";

function Modal({ handleDelete, handleCancelar }) {
  return (
    <div className="col">
      <div className="confirm-modal shadow">
        <div className="modal-info text-white">
          <h5 className="text-danger">Deseja excluir o grupo selecionado?</h5>
          <p>se eliminar não voltará a ver este registro</p>
        </div>
        <div className="modal-button">
          <button
            className="btn btn-success ms-2 shadow fw-bold"
            onClick={handleDelete}
          >
            Confirmar
          </button>
          <button
            className="btn btn-danger ms-2 shadow fw-bold"
            onClick={handleCancelar}
          >
            {" "}
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;