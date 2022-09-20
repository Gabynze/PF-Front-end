import React from "react";
import "./GroupsCard.css";


function GroupsCard({ grupo, onDelete, upDate, onViewget }) {
  return (
    <div className="container-principal-grupo">
      <div className="container-nome-grupo">{grupo}</div>
      <div className="card-button-grupo">
      <button
          className="btn btn-outline-info ms-1 btn-sm"
          onClick={onViewget }
        >
          <i className="fa fa-address-card" />
        </button>
        <button
          className="btn btn-outline-danger ms-1 btn-sm"
          onClick={onDelete}
        >
          <i className="fa fa-trash" />
        </button>
        <button
          className="btn btn-outline-success ms-1 btn-sm"
          onClick={upDate}
        >
          <i className="fa fa-pen" />
        </button>
      </div>
    </div>
  );
}

export default GroupsCard;