import { capitalizeWords } from "../functions/getAdditionalInfo";

export const PokedexSelector = ({
  pokedexList,
  selectedPokedexUrl,
  handlePokedexChange,
}) => {
  return (
    <div className="d-flex align-items-center ps-2">
      <label htmlFor="pokedexSelect" className="me-2">
        Región:
      </label>

      <select
        id="pokedexSelect"
        className="form-select form-select-sm"
        aria-label="select region"
        onChange={handlePokedexChange}
        value={selectedPokedexUrl}
        // style={{ width: "20%" }}
      >
        {pokedexList.results.map((pokedex) => (
          <option key={pokedex.name} value={pokedex.url}>
            {capitalizeWords(pokedex.name)}
          </option>
        ))}
      </select>
    </div>
  );
};
