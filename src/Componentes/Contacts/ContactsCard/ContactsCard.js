import React from "react";
import "./ContactsCard.css";
import { BsFillPersonFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"


function ContactsCard({ nome, sobrenome, telefone, email, onDelete, upDate }) {
  return (
    <>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-1">
              <div className="card">
                <div className="card-body shadow">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <button
                        className="btn btn-outline-primary shadow my-1"
                        onClick={upDate}
                      >
                        <i className="fa fa-pen" />
                      </button>
                      <button
                        className="btn btn-outline-danger shadow my-1"
                        onClick={onDelete}
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                    <div className="col-md-8">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                        <BsFillPersonFill className='icono'/> Nome: {""}
                          <span className="fw-bold">{nome}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Sobrenome: {''}
                          <span className='fw-bold'>{sobrenome}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                        <MdEmail className='icono'/> Email: {""}
                          <span className="fw-bold">{email}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Telefone: {""}
                          <span className="fw-bold">{telefone}</span>
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