import React from "react";
import NavBar from "../NavBar/NavBar";
import GroupList from "../Groups/GroupList/GroupList";
import imagePrincipal from "../../Images/imagePrincipal.png";
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
        </section>
      </div>
    </>
  );
}

export default MainPage;
