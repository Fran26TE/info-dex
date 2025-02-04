import { capitalizeWords, getTypeImge } from "../functions/getAdditionalInfo";
import { useAudioPokemon } from "../hooks/useAudioPokemon";

import { formatNumber } from "../functions/getAdditionalInfo";

export const InfoDetail = ({ pokemonData }) => {
  const { audioRef, playAudio } = useAudioPokemon();

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3">
      <div className="container mt-2 bg-light rounded border border-dark">
        <table className="table">
          <tbody>
            <tr>
              <th
                className="bg-light"
                style={{ width: "30px", textAlign: "right" }}
              >
                ID Nacional:
              </th>
              <td className="bg-light">{pokemonData.id}</td>
            </tr>
            <tr>
              <th
                className="bg-light"
                style={{ width: "30px", textAlign: "right" }}
              >
                Tipo:
              </th>
              <td className="bg-light">
                {pokemonData.types.map((value) => (
                  <span key={value.slot}>
                    <img
                      src={getTypeImge(value.type.name)}
                      alt={`Imagen ${pokemonData.name}`}
                      className="bg-light bg-gradient mb-1"
                    />{" "}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <th
                className="bg-light"
                style={{ width: "30px", textAlign: "right" }}
              >
                Habilidades:
              </th>
              <td className="bg-light">
                {pokemonData.abilities
                  .map((value) =>
                    value.is_hidden === true ? (
                      <strong key={value.ability.name}>
                        {capitalizeWords(value.ability.name)}
                      </strong>
                    ) : (
                      <span key={value.ability.name}>
                        {capitalizeWords(value.ability.name)}
                      </span>
                    )
                  )
                  .reduce((prev, curr) => [prev, ", ", curr])}
              </td>
            </tr>
            <tr>
              <th
                className="bg-light"
                style={{ width: "30px", textAlign: "right" }}
              >
                Altura:
              </th>
              <td className="bg-light">{`${formatNumber(
                pokemonData.height
              )} m`}</td>
            </tr>
            <tr>
              <th
                className="bg-light"
                style={{ width: "30px", textAlign: "right" }}
              >
                Peso:
              </th>
              <td className="bg-light">{`${formatNumber(
                pokemonData.weight
              )} kg`}</td>
            </tr>
            <tr>
              <th
                className="bg-light"
                style={{
                  width: "30px",
                  textAlign: "right",
                }}
              >
                Sonido:
              </th>
              <td
                className="bg-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  onClick={playAudio}
                  className="bi bi-volume-up"
                  style={{ cursor: "pointer", fontSize: "20px" }}
                ></i>

                <audio ref={audioRef} src={pokemonData.cries.latest} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
