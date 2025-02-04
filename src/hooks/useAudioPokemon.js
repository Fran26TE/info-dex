import { useRef } from "react";

export const useAudioPokemon = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return {
    audioRef,
    playAudio,
  };
};
