import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import ContactsCard from "../ContactsCard/ContactsCard";
import { Link } from "react-router-dom";
import { ModalContacts } from "../index";
import { useParams, useNavigate } from "react-router-dom";
import './ListContacts.css'

function ListContacts() {
  let navigate = useNavigate();

  // estados para listar 
  const [listContacts, setListContacts] = useState();
  
  // estados para deletar
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState();

  // estados para buscar
  const [search, setSearch] = useState();

  // pegar Id da URL
  const {groupsId}= useParams ();

  // para listar os contatos por grupo

  function allContacts() {
    fetch(`http://localhost:8080/api/grupos/${groupsId}`)
      .then((response) => response.json())
      .then((data) => setListContacts(data));
  }
  useEffect(() => {
    allContacts();
  },);
  // //////

  // Para deletar
  const onDelete = (contactId) => {
    setContactToDelete(contactId);
    setShowModal(true);
  };

  const handleDelete = async () => {
    setShowModal(false);
    const response = await fetch(
      "http://localhost:8080/api/contatos/" + contactToDelete,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      alert("Deletado com sucesso");
      allContacts();
    }
  };

  const handleCancelar = () => {
    setContactToDelete("");
    setShowModal(false);
  };
  // //////

  // Filtrar-buscar
  const contacts = !search
    ? listContacts
    : listContacts.filter((data) =>
        data.Nome.toLowerCase().includes(search.toLocaleLowerCase())
      );
  // ////

  return (
    <>
      <NavBar />
      <section className="parte-de-cima p-5">
        <div className="col-dir">
          <p className="h2">
            <Link
              to={`/RegisterContacts/${groupsId}`}
              className="btn btn-success ms-2 shadow"
            >
              Adicionar Contato <i className="fa fa-plus-circle ms-1" />
            </Link>
          </p>
        </div>

        <div className="col-esq p-2">
          <div className="row">
            <div className="col-md-7">
              <form className="row">
                <div className="col">
                  <div className="mb-1">
                    <input
                      type="text"
                      className="form-control shadow"
                      placeholder="Pesquisar Contato..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-dark shadow"
                      value="Pesquisar"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* listar todos os contatos */}
      <div className="container-cards">
        {contacts?.map((contact, index) => {
          return (
            <ContactsCard
              key={index}
              id={contact._id}
              nome={contact.Nome}
              sobrenome={contact.Sobrenome}
              telefone={contact.Telefone}
              email={contact.Email}
              onDelete={() => onDelete(contact._id)}
              upDate={() => navigate(`/Updatecontacts/${groupsId}/edit/${contact._id}`)}
            />
          );
        })}
      </div>

      {showModal && (
        <ModalContacts
          handleCancelar={handleCancelar}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

export default ListContacts;