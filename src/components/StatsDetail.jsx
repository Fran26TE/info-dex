import { capitalizeWords, percentToStat } from "../functions/getAdditionalInfo";

export const StatsDetail = ({ pokemonData }) => {
  return (
    <div
      className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
      style={{ maxHeight: "500px" }}
    >
      <div className="bg-light p-2 mt-2 pb-3 rounded border border-dark">
        {pokemonData.stats.map((value) => (
          <div key={value.stat.name} className="mt-1 mb-2">
            <label>{capitalizeWords(value.stat.name)}</label>
            <div
              className="progress"
              role="progressbar"
              aria-label="stat"
              aria-valuenow={value.base_stat}
              aria-valuemin="0"
              aria-valuemax="200"
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: `${percentToStat(value.base_stat)}%` }}
              >
                {value.base_stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
