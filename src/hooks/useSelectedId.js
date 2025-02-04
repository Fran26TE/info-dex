import { useState } from "react";

export const useSelectedId = () => {
  const [selectedIdNacional, setSelectedIdNacional] = useState(null);

  const handleCardClick = (id) => {
    setSelectedIdNacional(id);
  };

  return { selectedIdNacional, handleCardClick };
};
