import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const usePokedex = () => {
  const { data: pokedexList, isLoading: isLoadingPokedexList } = useFetch(
    "https://pokeapi.co/api/v2/pokedex?limit=1000&offset=0"
  );
  const [selectedPokedexUrl, setSelectedPokedexUrl] = useState("");
  const { data: pokemonData, isLoading: isLoadingPokemonData } =
    useFetch(selectedPokedexUrl);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    if (pokedexList && pokedexList.results.length > 0) {
      setSelectedPokedexUrl(pokedexList.results[0].url);
    }
  }, [pokedexList]);

  useEffect(() => {
    if (pokemonData && pokemonData.pokemon_entries) {
      if (searchTerm.length >= 2) {
        const filtered = pokemonData.pokemon_entries.filter((entry) =>
          entry.pokemon_species.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
        setFilteredPokemon(filtered);
      } else {
        setFilteredPokemon(pokemonData.pokemon_entries);
      }
    }
  }, [searchTerm, pokemonData]);

  const handlePokedexChange = (event) => {
    setSelectedPokedexUrl(event.target.value);
    setSearchTerm("");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return {
    pokedexList,
    isLoadingPokedexList,
    selectedPokedexUrl,
    handlePokedexChange,
    pokemonData,
    isLoadingPokemonData,
    searchTerm,
    handleSearchChange,
    filteredPokemon,
  };
};
