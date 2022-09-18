import React, { useEffect, useState } from "react";
import "./GroupList.css";
import Modal from "../Modal/Modal";
import GroupsCard from "../GroupsCard/GroupsCard";

function ListGrupos() {
  const [grupo, setGrupo] = useState("");

  // estados para use effect
  const [listaGrupos, setListaGrupos] = useState();

  // estados para modal
  const [showModal, setShowModal] = useState(false);

  // estados para deletar
  const [grupoDelete, setGrupoDelete] = useState();

  // estados para editar
  const [isUpdate, setIsUpDate] = useState();

  const handleAdd = async (e) => {
    e.preventDefault();

    const data = {
      Grupo: grupo,
    };
    console.log("data", data);
    const response = await fetch("http://localhost:8080/api/grupos/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (response.ok) {
      console.log("OKS", response.ok);
      grupos();
    } else alert("Erro");
  };

  function grupos() {
    fetch("http://localhost:8080/api/grupos")
      .then((response) => response.json())
      .then((data) => setListaGrupos(data));
  }

  useEffect(() => {
    grupos();
  }, []);

  const onDelete = (grupoId) => {
    setGrupoDelete(grupoId);
    setShowModal(true);
  };

  const handleDelete = async () => {
    setShowModal(false);
    const response = await fetch("http://localhost:8080/api/grupos/" + grupoDelete, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Deletado com sucesso");
      // fechar a modal tambem pode ser aqui
      // setShowModal(false);
      grupos();
    }
  };

  const handleCancelar = () => {
    setGrupoDelete("");
    setShowModal(false);
  };

  // EDITAR
  const onUpdate = (grupoId) => {
    fetch(`http://localhost:8080/api/grupos/${grupoId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("retorno do alterar", data);
        setIsUpDate(grupoId);
        setGrupo(data.Grupo);
      });
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

  // console.log ('listagrupos', listaGrupos)

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
              upDate={() => onUpdate(grupo._id)}
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