import React, { useEffect, useState } from "react";
import "./GroupList.css";
import Modal from "../Modal/Modal";
import GroupsCard from "../GroupsCard/GroupsCard";
import {useNavigate} from 'react-router-dom'

function ListGrupos() {
  const [grupo, setGrupo] = useState("");

  // estados para lista e use effect
  const [listaGrupos, setListaGrupos] = useState();

  // estados para modal
  const [showModal, setShowModal] = useState(false);

  // estados para deletar
  const [grupoDelete, setGrupoDelete] = useState();

  // estados para editar
  const [isUpdate, setIsUpDate] = useState();

  let navigate = useNavigate ();

  // Adicionar e listar os grupos
  const handleAdd = async (e) => {
    e.preventDefault();
    const data = {
      'Grupo': grupo
    };

    const response = await fetch("http://localhost:8080/api/grupos/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (response.ok) {
      console.log("OKS", response.ok);
      setGrupo ('');
      grupos();
    } else console.log("ERRO");
  };

  function grupos() {
    fetch("http://localhost:8080/api/grupos")
      .then((response) => response.json())
      .then((data) => setListaGrupos(data));
  }

  useEffect(() => {
    grupos();
  }, []);

  // para Delete
  const onDelete = (grupoId) => {
    setGrupoDelete(grupoId);
    setShowModal(true);
  };

  const handleDelete = async () => {
    
    const response = await fetch("http://localhost:8080/api/grupos/" + grupoDelete, {
      method: "DELETE",
    });
    if (response.ok) {
      setShowModal(false);
      grupos();
      alert("Deletado com sucesso");
    }
  };

  const handleCancelar = () => {
    setGrupoDelete("");
    setShowModal(false);
  };
  // ////

  // para EDITAR
  const onUpdate = (grupo) => {
    setIsUpDate(grupo._id);
    setGrupo(grupo.Grupo);
  };
  const handleUpdate = async () => {
    const data = {
      Grupo: grupo,
    };
    const response = await fetch("http://localhost:8080/api/grupos/" + isUpdate, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (response.ok) {
      console.log("OKS", response.ok);
      setIsUpDate(undefined);
      setGrupo("");
      grupos();
    }
  };
  // ////

  return (
    <div className="container-todos-grupos">
      <h1>Grupos de Contatos</h1>
      <div className="container-formulario-grupo">
        <form className="row">
          <div className="mb-1">
            <input
              className="form-control"
              type="text"
              placeholder="Criar Grupo"
              value={grupo}
              onChange={(e) => setGrupo(e.target.value)}
            />
          </div>
        </form>
        <div className="mb-2">
          <button
            className="btn btn-dark shadow ms-1"
            type="submit"
            onClick={isUpdate ? handleUpdate : handleAdd}
          >
            {isUpdate ? "Atualizar" : "Adicionar"}
          </button>
        </div>
      </div>
      {/* Para listar os grupos */}
      <div className="container-cards-grupos">
        {listaGrupos?.map((grupo) => {
          return (
            <GroupsCard
              key={grupo._id}
              id={grupo._id}
              grupo={grupo.Grupo}
              onDelete={() => onDelete(grupo._id)}
              upDate={() => onUpdate(grupo)}
              onViewget ={() => navigate(`/groupsContacts/view/${grupo._id}`)}
            />
          );
        })}
      </div>

      {showModal && (
        <Modal handleCancelar={handleCancelar} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default ListGrupos;