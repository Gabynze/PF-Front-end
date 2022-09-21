import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
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
    </>
  );
}

export default NavBar;