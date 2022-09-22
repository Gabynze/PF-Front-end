import React from "react";
import "./ContactsCard.css";

function ContactsCard({ nome, sobrenome, telefone, email, onDelete, upDate }) {
  return (
    <>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-5 my-2">
              <div className="card-info shadow">
                <div className="">
                  <div className="row align-items-center d-flex justify-content-center">
                    <div className="col-md-1 d-flex flex-column align-items-center button-card">
                      <button
                        className="btn btn-primary shadow my-1"
                        onClick={upDate}
                      >
                        <i className="fa fa-user-pen" />
                      </button>
                      <button
                        className="btn btn-danger shadow my-1"
                        onClick={onDelete}
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                    <div className="col-md-10" >
                      <ul className="list-group info-contacts">
                        <li className="list-group-item list-group-item-action">
                        <i className="fa-solid fa-user me-2" />Nome: {""}
                          <span className="fw-bold">{nome}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Sobrenome: {''}
                          <span className='fw-bold'>{sobrenome}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          <i className="fa-solid fa-phone me-2" />
                          Telefone: {''}
                          <span className="fw-bold">{telefone}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          <i className="fa-solid fa-envelope me-2" /> 
                        Email: {''}
                          <span className="fw-bold">{email}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactsCard;


      