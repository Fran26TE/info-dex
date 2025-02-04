import { Loading } from "../components/Loading";
import { useDetailPokemon } from "../hooks/useDetailPokemon";
import { InfoDetail } from "../components/InfoDetail";
import { TypesDetail } from "../components/TypesDetail";
import { StatsDetail } from "../components/StatsDetail";
import { ImageDetail } from "../components/ImageDetail";
import { HeaderDetail } from "../components/HeaderDetail";
import { FooterDetail } from "../components/FooterDetail";

export const DetailModal = ({ value, handleCardClick }) => {
  const { pokemonData, isLoadingPokemonData, finalTypesData, isLoadingTypes } =
    useDetailPokemon(`https://pokeapi.co/api/v2/pokemon/${value}/`);

  return isLoadingPokemonData ? (
    <Loading />
  ) : (
    <>
      <div className="modal-content customContent">
        <div className="modal-header bg-dark text-white rounded-top">
          <HeaderDetail pokemonData={pokemonData} />
        </div>
        <div className="modal-body rounded-bottom custom-background">
          <div className="row">
            <ImageDetail value={value} pokemonData={pokemonData} />
            <InfoDetail pokemonData={pokemonData} />
          </div>
          <div className="row">
            <StatsDetail pokemonData={pokemonData} />
            <TypesDetail types={finalTypesData} isLoading={isLoadingTypes} />
          </div>
        </div>
        <div className="modal-footer bg-dark d-flex justify-content-between">
          <FooterDetail value={value} handleCardClick={handleCardClick} />
        </div>
      </div>
    </>
  );
};
