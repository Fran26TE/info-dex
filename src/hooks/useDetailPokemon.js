import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const useDetailPokemon = (url) => {
  const { data: pokemonData, isLoading: isLoadingPokemonData } = useFetch(url);

  const [typesData, setTypesData] = useState([]); // Guardar datos de los tipos
  const [finalTypesData, setFinalTypesData] = useState(null);
  const [isLoadingTypes, setIsLoadingTypes] = useState(false);

  // 🔹 1. Cargar los datos de los tipos cuando `pokemonData` esté listo
  useEffect(() => {
    if (!pokemonData || !pokemonData.types) {
      return;
    }

    const typeUrls = pokemonData.types.map((value) => value.type.url);

    const fetchTypeData = async () => {
      setIsLoadingTypes(true);
      try {
        const responses = await Promise.all(typeUrls.map((url) => fetch(url)));
        const typeDataArray = await Promise.all(
          responses.map((res) => res.json())
        );

        setTypesData(typeDataArray);
      } catch (error) {
        console.error("❌ Error al obtener los datos de los tipos:", error);
      }
      setIsLoadingTypes(false);
    };

    fetchTypeData();
  }, [pokemonData]);

  // 🔹 2. Procesar los `damage_relations` solo cuando `typesData` cambie
  useEffect(() => {
    if (typesData.length === 0) return; // Esperar a que `typesData` tenga datos

    const processedData = processDamageRelations(typesData);

    setFinalTypesData(processedData);
  }, [typesData]); // Solo se ejecuta cuando `typesData` cambia

  const processDamageRelations = (typesData) => {
    if (!typesData || typesData.length === 0) return null;

    const [type1, type2] = typesData;
    const damage1 = type1?.damage_relations || {};
    const damage2 = type2?.damage_relations || {};

    const removeDuplicates = (arr) => {
      const seen = new Set();
      return arr.filter((item) => {
        if (!seen.has(item.name)) {
          seen.add(item.name);
          return true;
        }
        return false;
      });
    };

    if (!type2) {
      return {
        damage_relations: {
          quadruple_damage_from: [],
          double_damage_from: removeDuplicates(
            damage1.double_damage_from || []
          ),
          half_damage_from: removeDuplicates(damage1.half_damage_from || []),
          quarter_damage_from: [],
          no_damage_from: removeDuplicates(damage1.no_damage_from || []),
        },
      };
    }

    // Calcular daño x4 (si un tipo tiene x2 y el otro también x2 del mismo elemento)
    const quadruple_damage_from = damage1.double_damage_from
      .filter(({ name }) =>
        damage2.double_damage_from.some((item) => item.name === name)
      )
      .map(({ name }) => ({ name }));

    // Calcular daño x1/4 (si un tipo tiene x1/2 y el otro también x1/2 del mismo elemento)
    const quarter_damage_from = damage1.half_damage_from
      .filter(({ name }) =>
        damage2.half_damage_from.some((item) => item.name === name)
      )
      .map(({ name }) => ({ name }));

    // Calcular daño x2 (excluyendo los que ya están en x4)
    const double_damage_from = removeDuplicates([
      ...damage1.double_damage_from,
      ...damage2.double_damage_from,
    ]).filter(
      ({ name }) => !quadruple_damage_from.some((item) => item.name === name)
    );

    // Calcular daño x1/2 (excluyendo los que ya están en x1/4)
    const half_damage_from = removeDuplicates([
      ...damage1.half_damage_from,
      ...damage2.half_damage_from,
    ]).filter(
      ({ name }) => !quarter_damage_from.some((item) => item.name === name)
    );

    // Combinar inmunidades y priorizarlas eliminando del resto
    const no_damage_from = removeDuplicates([
      ...damage1.no_damage_from,
      ...damage2.no_damage_from,
    ]);
    const allEntries = {
      quadruple_damage_from,
      double_damage_from,
      half_damage_from,
      quarter_damage_from,
      no_damage_from,
    };

    // Eliminar registros que estén en más de un array
    const seen = new Map();
    for (const [key, arr] of Object.entries(allEntries)) {
      arr.forEach(({ name }) => {
        if (!seen.has(name)) {
          seen.set(name, key);
        } else {
          const prevKey = seen.get(name);
          if (prevKey !== key) {
            seen.delete(name); // Elimina de ambos lados si está duplicado en diferentes arrays
          }
        }
      });
    }

    // Mover a no_damage_from si está en cualquier otro array
    no_damage_from.forEach(({ name }) => seen.set(name, "no_damage_from"));

    // Generar el objeto final sin duplicados entre arrays
    const finalRelations = {
      quadruple_damage_from: [],
      double_damage_from: [],
      half_damage_from: [],
      quarter_damage_from: [],
      no_damage_from: [],
    };

    for (const [name, category] of seen.entries()) {
      finalRelations[category].push({ name });
    }

    return { damage_relations: finalRelations };
  };

  return { pokemonData, isLoadingPokemonData, finalTypesData, isLoadingTypes };
};
