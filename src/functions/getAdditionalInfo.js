// Devuelve imagen de pokemon según su id Nacional
export const getImg = (id, key) => {
  switch (key) {
    case "pokedexHome":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

    case "pokedexSprite":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    case "detailHome":
      return {
        normal: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
        shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`,
      };
    case "detailSprite":
      return {
        normal: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
      };
    default:
      break;
  }
};

// Devuelve la imagen del tipo de pokemon
export const getTypeImge = (name) => {
  switch (name) {
    case "normal":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/1.png`;
    case "fighting":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/2.png`;
    case "flying":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/3.png`;
    case "poison":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/4.png`;
    case "ground":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/5.png`;
    case "rock":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/6.png`;
    case "bug":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/7.png`;
    case "ghost":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/8.png`;
    case "steel":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/9.png`;
    case "fire":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/10.png`;
    case "water":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/11.png`;
    case "grass":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/12.png`;
    case "electric":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/13.png`;
    case "psychic":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/14.png`;
    case "ice":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/15.png`;
    case "dragon":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/16.png`;
    case "dark":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/17.png`;
    case "fairy":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/18.png`;
    default:
      break;
  }
};

// Devuelve el valor id del url de cada pokemon
export const getId = (url) => {
  return url.match(/\/(\d+)\/$/)[1];
};

// Recibe un string y lo devuelve con la primera letra de cada palabra en mayúscula
export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Usado para el cálculo de la barra de stats
export const percentToStat = (num) => {
  return (num / 200) * 100;
};

// Usado para pasar el valor de peso a kg y el valor de altura a metros
export const formatNumber = (value) => {
  const num = value * 0.1;
  return Math.round(num * 10) / 10;
};
