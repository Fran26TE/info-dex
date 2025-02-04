import { Loading } from "../components/Loading";
import { PokemonList } from "../components/PokemonList";
import { PokedexSelector } from "../components/PokedexSelector";
import { usePokedex } from "../hooks/usePokedex";
import { SearchInput } from "../components/SearchInput";
import { EmptyList } from "../components/EmptyList";

export const ListPage = () => {
  const {
    pokedexList,
    isLoadingPokedexList,
    selectedPokedexUrl,
    handlePokedexChange,
    searchTerm,
    handleSearchChange,
    filteredPokemon,
    isLoadingPokemonData,
  } = usePokedex();

  return (
    <>
      <div className="container mb-4">
        {isLoadingPokedexList ? (
          <Loading />
        ) : (
          <div className="container d-flex flex-column flex-md-row align-items-center gap-3 mt-3 p-1 pt-2 pb-2 bg-light border border-dark rounded">
            <PokedexSelector
              pokedexList={pokedexList}
              selectedPokedexUrl={selectedPokedexUrl}
              handlePokedexChange={handlePokedexChange}
            />
            <SearchInput
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              filteredPokemon={filteredPokemon}
            />
          </div>
        )}
      </div>
      {isLoadingPokemonData ? (
        <Loading />
      ) : !filteredPokemon || filteredPokemon.length <= 0 ? (
        <EmptyList />
      ) : (
        <PokemonList data={{ pokemon_entries: filteredPokemon }} />
      )}
    </>
  );
};
