// async function fetchPokemon() {
const fetchPokemon = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  // const data = await fetch(url);
  // const dataJson = await data.json();
  const data = await fetch(url).then((response) => response.json());

  // console.log(data);
  // console.log(dataJson);

  return data;
};

const processPokemonData = (pokemonData) => {
  //
  // console.log(pokemonData);
  const id = pokemonData.id;
  const name = pokemonData.name;
  const img = pokemonData.sprites.other.dream_world.front_default;

  const types = pokemonData.types.map((element) => element.type.name);

  const hpObj = pokemonData.stats.find((element) => element.stat.name === "hp");
  const hp = hpObj.base_stat;

  const attackObj = pokemonData.stats.find(
    (element) => element.stat.name === "attack"
  );
  const attack = attackObj.base_stat;

  const defenseObj = pokemonData.stats.find(
    (element) => element.stat.name === "defense"
  );
  const defense = defenseObj.base_stat;

  const speedObj = pokemonData.stats.find(
    (element) => element.stat.name === "speed"
  );
  const speed = speedObj.base_stat;

  // console.log(id);
  // console.log(name);
  // console.log(img);
  // console.log(types);
  // console.log(hp);
  // console.log(attack);
  // console.log(defense);
  // console.log(speed);

  // const pokemonObj = {
  //   id: id,
  //   name: name,
  //   types: types,
  //   img: img,
  //   hp: hp,
  //   defense: defense,
  //   speed: speed,
  //   attack: attack,
  // };
  const pokemonObj = {
    id,
    name,
    types,
    img,
    hp,
    defense,
    speed,
    attack,
  };

  // console.log(pokemonObj);

  return pokemonObj;
};

export const mountPokemonArray = async (amount = 5) => {
  const pokemonArray = [];

  for (let i = 0; i < amount; i++) {
    const pokemonData = await fetchPokemon(i + 1);
    const processedPokemonData = processPokemonData(pokemonData);
    pokemonArray.push(processedPokemonData);
    // console.log(processedPokemonData);
  }

  // console.log(pokemonArray);

  return pokemonArray;
};

// mountPokemonArray(10);

// const livros = [
//   { titulo: "Aprendendo JS", autor: "John" },
//   { titulo: "Programação NodeJS", autor: "Jane" },
// ];

// const livroAchado = livros.find((livro) => livro.autor === "Janeeeeee");
// console.log(livroAchado);
