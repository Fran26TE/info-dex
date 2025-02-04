import { Navigate, Route, Routes } from "react-router";
import { ListPage } from "./pages/ListPage";

import img from "./assets/pokedex-logo.svg";

export const App = () => {
  return (
    <div className="custom-bg-app">
      <img
        className="mx-auto d-block pt-5 pb-3 size-image"
        src={img}
        alt="logo-pokedex"
      />

      <Routes>
        <Route path="/" element={<ListPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
