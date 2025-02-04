import React from "react";

export const SearchInput = ({
  searchTerm,
  handleSearchChange,
  filteredPokemon,
}) => {
  return (
    <div className="d-flex align-items-center">
      <label className="me-2"> Búsqueda:</label>

      <input
        type="text"
        className="form-control"
        id="searchPokemon"
        placeholder="Introducir Pokemon"
        value={searchTerm}
        onChange={handleSearchChange}
        list="pokemon-suggestions"
        style={{ maxWidth: "300px" }}
      />
      <datalist id="pokemon-suggestions">
        {searchTerm.length >= 3 &&
          filteredPokemon.map((entry) => (
            <option
              key={entry.pokemon_species.name}
              value={entry.pokemon_species.name}
            />
          ))}
      </datalist>
    </div>
  );
};
