import React from "react";
import NavBar from "../NavBar/NavBar";
import GroupList from "../Groups/GroupList/GroupList";
import imagePrincipal from "../../Images/imagePrincipal.jpg";
import "./MainPage.css";


function MainPage() {
  return (
    <>
      <div className="container-pagina-inicial">
        <header>
          <NavBar />
        </header>
        <section className="container-img-list">
          <div>
            <GroupList />
          </div>
          <div>
            <img
              src={imagePrincipal}
              alt="imagem"
              className="image-principal"
            />
          </div>
          <div className="texto-pagina">
            <h2 className="fw-bold shadow">
              Bem-Vindo a Agenda Virtual Toters
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainPage;
