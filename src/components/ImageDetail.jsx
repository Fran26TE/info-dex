import { getImg } from "../functions/getAdditionalInfo";
import { useToggleImage } from "../hooks/useToggleImage";

export const ImageDetail = ({ value, pokemonData }) => {
  const imgs = getImg(value, "detailSprite");
  const { toggleImg, toggle } = useToggleImage();

  return (
    <div
      className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center"
      style={{
        maxHeight: "300px",
        position: "relative",
      }}
    >
      <div
        className="bg-light p-1 rounded border border-dark"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          minWidth: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <i
          className="bi bi-stars ml-1"
          style={{
            fontSize: "24px",
            marginRight: "10px",
            paddingLeft: "5px",
            opacity: toggleImg ? 1 : 0,
          }}
        ></i>
        <i
          onClick={() => toggle(!toggleImg)}
          className={`bi ${toggleImg ? "bi-toggle-on" : "bi-toggle-off"}`}
          style={{
            fontSize: "24px",
            marginRight: "10px",
          }}
        />
      </div>
      <img
        src={toggleImg ? imgs.shiny : imgs.normal}
        alt={`Imagen ${pokemonData.name}`}
        style={{ height: "280px" }}
      />
    </div>
  );
};
