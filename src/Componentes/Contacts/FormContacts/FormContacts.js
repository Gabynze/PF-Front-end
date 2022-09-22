import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './FormContacts.css'


function FormContacts({ groupsId, onSubmit, buttonTitle, contactsInfo}) {

  // estados para submit
  // const [form, setForm]= useState({
  //   name:"",
  //   surname:"",
  //   phone:"",
  //   email:"",
  //   grupos:"",
  // })
  // const [validacion, SetValidacion]= useState(false)
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [grupo, setGrupo] = useState("1");
  const [grupos, setGrupos] = useState([]);
  const errorMessage = validate (name, surname, phone, email);

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
    setGrupo(groupsId);
  }, [groupsId])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // let validacion= Object.values(form).some(obj => obj === "");
    // SetValidacion( validacion)
    // let newProp=form;
    // newProp[e.target.name]=e.target.value;
    // setForm({...newProp})

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
                  {/* {validacion && form["name"] === "" ? <span></span>:""} */}
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sobrenome"
                    value={surname}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                  {/* {validacion  && form["surname"] === "" ? <span></span>:""} */}
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {/* {validacion && form["phone"] === "" ? <span></span>:""} */}
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {validacion  && form["email"] === "" ? <span></span>:""} */}
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
                  <p className="p-validation">{errorMessage}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}

const validate = (name, surname, phone, email) => {
  if (!name) return 'Todos os campos precisam ser preenchidos';
  if (!surname) return 'Campo Sobrenome precisa ser preenchido';
  if (!phone) return 'Campo Telefone precisa ser preenchido';
  if(!email) return 'Campo email precisa ser preenchido';
}
export default FormContacts;


   