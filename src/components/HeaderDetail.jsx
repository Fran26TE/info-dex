import React from "react";

export const HeaderDetail = ({ pokemonData }) => {
  return (
    <>
      <h1 className="modal-title fs-5" id="exampleModalLabel">
        {pokemonData.id} # {pokemonData.name.toUpperCase()}
      </h1>
      <button
        type="button"
        className="btn-close custom-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </>
  );
};
