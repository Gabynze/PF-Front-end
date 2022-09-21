import React, {useEffect, useState} from 'react'
import FormContacts from '../FormContacts/FormContacts'
import {useParams, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


function UpdateContacts() {

  let navigate = useNavigate();

  const {groupsId}= useParams();

  const {UpdateContactsId} = useParams();

  const [contactsInfo, setContactsInfo] = useState();

  // // Editar e mostrar os dados no formulario
  useEffect(() => {
    fetch(`http://localhost:8080/api/contatos/${UpdateContactsId}`)
      .then((response) => response.json())
      .then((data) => {
      setContactsInfo(data)
        
      });
  },[UpdateContactsId]);

  const handleUpdate = async(contactsData) => {
  
    const response = await fetch('http://localhost:8080/api/contatos/' + contactsData._id, {
      method: 'PUT',
      body:JSON.stringify(contactsData),
      headers: {'Content-type': 'application/json; charset=UTF-8' }
    });
    if (response.ok) {
      console.log('OKS', response.ok);

      navigate(`/groupsContacts/view/${groupsId}`);
    } else{
      console.log ('ERRO');
    }
  }

  return (
    <>
      <div className="botao-inicio p-3 shadow">
        <Link
          to={"/"}
          className="btn btn-outline-secondary ms-2 shadow fw-bold"
        >
          <i className="fa-solid fa-house-user"></i> Início
        </Link>
      </div>
      <div className="col">
        <h2 className="h4 text-success fw-bold ms-5">Atualizar Contato</h2>

        <FormContacts
          groupsId={groupsId}
          onSubmit={(contactsData)=> handleUpdate(contactsData)}
          contactsInfo= {contactsInfo}
          buttonTitle= 'Atualizar'
        />
      </div>
    </>
  )
}

export default UpdateContacts;