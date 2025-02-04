import React from "react";
import { getTypeImge } from "../functions/getAdditionalInfo";

export const TypesDetail = ({ types, isLoading }) => {
  return (
    <div
      className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
      style={{ maxHeight: "500px" }}
    >
      <div className="container mt-2 bg-light rounded border border-dark">
        {types &&
          !isLoading &&
          (types.damage_relations.quadruple_damage_from.length > 0 ||
            types.damage_relations.double_damage_from.length > 0) && (
            <>
              <span>Debilidades:</span>
              <br />
              <table className="table">
                <tbody>
                  {types.damage_relations.quadruple_damage_from.length > 0 && (
                    <tr>
                      <th
                        scope="row"
                        className="bg-light"
                        style={{ width: "40px", textAlign: "right" }}
                      >
                        X4
                      </th>
                      <td className="bg-light">
                        {types.damage_relations.quadruple_damage_from.map(
                          (value) => (
                            <span key={value.name}>
                              <img
                                src={getTypeImge(value.name)}
                                alt={`Imagen ${value.name}`}
                                className="bg-light bg-gradient"
                              />{" "}
                            </span>
                          )
                        )}
                      </td>
                    </tr>
                  )}
                  {types.damage_relations.double_damage_from.length > 0 && (
                    <tr>
                      <th
                        scope="row"
                        className="bg-light"
                        style={{ width: "40px", textAlign: "right" }}
                      >
                        X2
                      </th>
                      <td className="bg-light">
                        {types.damage_relations.double_damage_from.map(
                          (value) => (
                            <span key={value.name}>
                              <img
                                src={getTypeImge(value.name)}
                                alt={`Imagen ${value.name}`}
                                className="bg-light bg-gradient"
                              />{" "}
                            </span>
                          )
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}

        {types &&
          !isLoading &&
          (types.damage_relations.quarter_damage_from.length > 0 ||
            types.damage_relations.half_damage_from.length > 0) && (
            <>
              <span>Resistencias:</span>
              <br />
              <table className="table">
                <tbody>
                  {types.damage_relations.half_damage_from.length > 0 && (
                    <tr>
                      <th
                        scope="row"
                        className="bg-light"
                        style={{ width: "40px", textAlign: "right" }}
                      >
                        1/2
                      </th>
                      <td className="bg-light">
                        {types.damage_relations.half_damage_from.map(
                          (value) => (
                            <span key={value.name}>
                              <img
                                src={getTypeImge(value.name)}
                                alt={`Imagen ${value.name}`}
                                className="bg-light bg-gradient"
                              />{" "}
                            </span>
                          )
                        )}
                      </td>
                    </tr>
                  )}
                  {types.damage_relations.quarter_damage_from.length > 0 && (
                    <tr>
                      <th
                        scope="row"
                        className="bg-light"
                        style={{ width: "40px", textAlign: "right" }}
                      >
                        1/4
                      </th>
                      <td className="bg-light">
                        {types.damage_relations.quarter_damage_from.map(
                          (value) => (
                            <span key={value.name}>
                              <img
                                src={getTypeImge(value.name)}
                                alt={`Imagen ${value.name}`}
                                className="bg-light bg-gradient"
                              />{" "}
                            </span>
                          )
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}

        {types &&
          !isLoading &&
          types.damage_relations.no_damage_from.length > 0 && (
            <>
              <span>Sin Efecto:</span>
              <br />
              <table className="table">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="bg-light"
                      style={{ width: "40px", textAlign: "right" }}
                    >
                      0
                    </th>
                    <td className="bg-light">
                      {types.damage_relations.no_damage_from.map((value) => (
                        <span key={value.name}>
                          <img
                            src={getTypeImge(value.name)}
                            alt={`Imagen ${value.name}`}
                            className="bg-light bg-gradient"
                          />{" "}
                        </span>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
      </div>
    </div>
  );
};
