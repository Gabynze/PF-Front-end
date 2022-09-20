import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"


function FormContacts({ groupsId, onSubmit, buttonTitle, contactsInfo }) {

  // estados para submit
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [grupo, setGrupo] = useState("1");
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    fetch ("http://localhost:8080/api/grupos/")
      .then((response) => response.json())
      .then((data) => setGrupos(data));
  });
  useEffect(() => {
    setName(contactsInfo?.Nome);
    setSurName(contactsInfo?.Sobrenome);
    setPhone(contactsInfo?.Telefone);
    setEmail(contactsInfo?.Email);
    setGrupo(contactsInfo?.Grupo);
  }, [contactsInfo]);
  

  useEffect(() => {
    console.log(groupsId);
    setGrupo(groupsId);
  }, [groupsId])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Nome: name,
      Sobrenome: surname,
      Telefone: phone,
      Email: email,
      Grupo: grupo,
    };

    if (contactsInfo) {
      data._id = contactsInfo._id;
    }
    onSubmit(data);
  };

  return (
    <>
      <section className="add-contact">
        <div className="container">
          <div className="row-main">
            <div className="col-add col-md-5 p-5 shadow">
              <form onSubmit={handleSubmit}>
                <div className="botoes mb-3">
                  <button
                    type="submit"
                    className="btn btn-outline-success fw-bold"
                  >
                    {buttonTitle}
                  </button>
                  <Link 
                    to={`/groupsContacts/view/${groupsId}`}
                    className="btn btn-outline-danger ms-2 fw-bold"
                  >
                    Cancelar
                  </Link>
                  
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sobrenome"
                    value={surname}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <select  value={grupo} onChange = {(e) => setGrupo(e.target.value)}>
                    <option value="">Selecione Grupo</option>
                    {
                      grupos?.map((grupo) =>(
                        <option key={grupo._id} value={grupo._id}>{grupo.Grupo}</option>
                      ))
                    }
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}

export default FormContacts;