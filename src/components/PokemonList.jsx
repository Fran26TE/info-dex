import { capitalizeWords, getId, getImg } from "../functions/getAdditionalInfo";
import { usePagination } from "../hooks/usePagination";
import { Pagination } from "./Pagination";
import { DetailModal } from "../pages/DetailModal";
import { useSelectedId } from "../hooks/useSelectedId";

export const PokemonList = ({ data }) => {
  const itemsPerPage = 20;
  const {
    currentPage,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
    paginate,
    getPageNumbers,
  } = usePagination(data.pokemon_entries.length, itemsPerPage);
  const { selectedIdNacional, handleCardClick } = useSelectedId();

  const currentItems = data.pokemon_entries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="container">
      <div className="row">
        {currentItems.map((entry) => {
          const { entry_number, pokemon_species } = entry;
          const idPokedex = entry_number;
          const idNacional = getId(pokemon_species.url);
          const img = getImg(idNacional, "pokedexHome");
          return (
            <div
              key={idPokedex}
              className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3"
            >
              <div
                className="card border-dark text-bg-light card-hover"
                data-bs-toggle="modal"
                data-bs-target="#infoDetail"
                onClick={() => handleCardClick(idNacional)}
              >
                <div className="card-header text-bg-dark">
                  {idPokedex} # {capitalizeWords(pokemon_species.name)}
                </div>
                <div className="card-body">
                  <img
                    src={img}
                    className="card-img bg-light bg-gradient"
                    alt={pokemon_species.name}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        getPageNumbers={getPageNumbers}
        paginate={paginate}
      />

      <div
        className="modal fade"
        id="infoDetail"
        tabIndex="-1"
        aria-labelledby="infoDetailPokemon"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          {selectedIdNacional !== null && (
            <DetailModal
              value={selectedIdNacional}
              handleCardClick={handleCardClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};
