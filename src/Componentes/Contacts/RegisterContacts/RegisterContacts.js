import React from "react";
import FormContacts from "../FormContacts/FormContacts";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function RegisterContacts() {
  let navigate = useNavigate();
  const {groupsId}= useParams ();

  const onSubmit = async (contactsData) => {
    const response = await fetch('http://localhost:8080/api/contatos/', {
      method: "POST",
      body: JSON.stringify(contactsData),
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    if (response.ok) {
      console.log("OKS", response.ok);
      navigate(`/groupsContacts/view/${groupsId}`);
    } else console.log("ERRO");
  };

  return (
    <>
    <div className="botao-inicio p-3 shadow">
        <Link
          to={"/"}
          className="btn btn-outline-secondary ms-2 shadow fw-bold"
        >
          <i class="fa-solid fa-house-user"></i> Início
        </Link>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="h4 text-success fw-bold ms-5">Criar Novo Contato</h2>

          <FormContacts
            groupsId={groupsId}
            onSubmit={(contactsData) => onSubmit(contactsData)}
            buttonTitle="Cadastrar"
          />
        </div>
      </div>
    </>
  );
}

export default RegisterContacts;