import { useState } from "react";

export const useToggleImage = () => {
  const [toggleImg, setToggleImg] = useState(false);

  const toggle = (v) => {
    setToggleImg(v);
  };
  return {
    toggleImg,
    toggle,
  };
};
