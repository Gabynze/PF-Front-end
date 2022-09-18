import React from "react";
// import { Link } from "react-router-dom";
import "./ContactsCard.css";

function ContactsCard({ nome, sobrenome, telefone, email, onDelete, upDate }) {
  return (
    <>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-5 my-1">
              <div className="card">
                <div className="card-body shadow">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      {/*<Link 
                      to={''}
                      className='btn btn-outline-warning shadow my-1'>
                        <i className='fa fa-eye'/>
  </Link>*/}
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
                    <div className="col-md-4">
                      <img
                        src="https://www.pinpng.com/pngs/m/343-3435180_default-user-profile-image-png-not-available-transparent.png"
                        className="img-contact img-fluid shadow"
                        alt="imagem de usuário"
                      />
                    </div>

                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Nome: {""}
                          <span className="fw-bold">{nome}</span>
                        </li>
                        <li className='list-group-item list-group-item-action'>
                          Sobrenome: {''}
                          <span className='fw-bold'>{sobrenome}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email: {""}
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