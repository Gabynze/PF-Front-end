import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"


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

    // let validacion= Object.values(form).some(obj => obj == "");
    // SetValidacion( validacion)

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
                  {/* {validacion && form["name"] == "" ? <span>o campos nome precisar ser preenchido</span>:""} */}
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sobrenome"
                    value={surname}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                  {/* {validacion  && form["surname"] == "" ? <span>o campos Sobrenome precisar ser preenchido</span>:""} */}
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {/* {validacion  && form["phone"] == "" ? <span>o campos Telefone precisar ser preenchido</span>:""} */}
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {validacion  && form["email"] == "" ? <span>o campos email precisar ser preenchido</span>:""} */}
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

// <section className="contact-list">
      //   <div className="container">
      //     <div className="col-md-6 my-4">
      //       <div className="col-md-7 shadow">
      //         <ul className="list-group">
      //           <li className="list-group-item list-group-item-action">
      //             <i className="fa-solid fa-user me-2" />
      //             Nome: {""}
      //             <span className="fw-bold">{nome}</span>
      //           </li>
      //           <li className="list-group-item list-group-item-action">
      //             Sobrenome: {""}
      //             <span className="fw-bold">{sobrenome}</span>
      //           </li>
      //           <li className="list-group-item list-group-item-action">
      //             <i className="fa-solid fa-envelope me-2" />
      //             Email: {""}
      //             <span className="fw-bold">{email}</span>
      //           </li>
      //           <li className="list-group-item list-group-item-action">
      //             <i className="fa-solid fa-phone me-2" />
      //             Telefone: {""}
      //             <span className="fw-bold">{telefone}</span>
      //           </li>
      //           <span className="btnz">
      //             <button className="btn btn-outline-primary shadow m-1"
      //               onClick={upDate}>
      //               <i className="fa fa-pen" />
      //             </button>
      //             <button className="btn btn-outline-danger shadow my-1"
      //               onClick={onDelete}>
      //               <i className="fa fa-trash" />
      //             </button>
      //           </span>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </section>