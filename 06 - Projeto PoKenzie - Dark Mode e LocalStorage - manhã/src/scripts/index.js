import { pokemonList } from "./pokeDatabase.js";
import { handleDarkMode } from "./theme.js";

function createPokemonCard({ name, img, types, hp, attack, defense, speed }) {
  const liCard = document.createElement("li");
  liCard.classList.add("card");

  // const iconState = "favoritado";
  const iconState = "nao-favoritado";

  // let favIcon = `<i class="card__fav fa-regular fa-star"></i>`;

  // if (iconState === "favoritado") {
  //   favIcon = `<i class="card__fav fa-solid fa-star"></i>`;
  // }

  const favIcon =
    iconState === "favoritado"
      ? `<i class="card__fav fa-solid fa-star"></i>`
      : `<i class="card__fav fa-regular fa-star"></i>`;

  liCard.innerHTML = `
  ${favIcon}
  <p class="card__hp">
    <span>HP</span>
    ${hp}
  </p>
  <img
    class="card__image"
    src=${img}
    alt="Imagem do Pokemon ${name}"
  />
  <h2 class="card__name">${name}</h2>
  <small class="card__type">${types}</small>
  <ul class="card__stats">
    <li class="card__stat">
      <h3 class="stat__value">${attack}</h3>
      <p class="stat__type">ATQ</p>
    </li>
    <li class="card__stat">
      <h3 class="stat__value">${defense}</h3>
      <p class="stat__type">DEF</p>
    </li>
    <li class="card__stat">
      <h3 class="stat__value">${speed}</h3>
      <p class="stat__type">VEL</p>
    </li>
  </ul>
  `;

  // console.log(liCard);
  return liCard;
}

function renderPokemonCards(pokemonArray) {
  const ulPokemonList = document.querySelector(".cards");

  pokemonArray.forEach((pokemonInfo) => {
    const pokemonCard = createPokemonCard(pokemonInfo);
    ulPokemonList.appendChild(pokemonCard);
  });
}

handleDarkMode();
renderPokemonCards(pokemonList);
