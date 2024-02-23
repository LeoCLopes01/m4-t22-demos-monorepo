import { handleDarkMode } from "./theme.js";
import { mountPokemonArray } from "./api.js";

// TODO: SEPARAR FUNÇÕES handleFavoriteEvent E handleStatFilter PARA OUTRO ARQUIVO

function createPokemonCard({ name, img, types, hp, attack, defense, speed }) {
  const liCard = document.createElement("li");
  liCard.classList.add("card");

  liCard.innerHTML = `
  <i class="card__fav fa-regular fa-star"></i>
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
  <small class="card__type">${types.join(" - ")}</small>
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
  const favIcon = liCard.querySelector(".card__fav");
  handleFavoriteEvent(favIcon);

  return liCard;
}

function renderPokemonCards(pokemonArray) {
  const ulPokemonList = document.querySelector(".cards");
  ulPokemonList.innerHTML = "";

  pokemonArray.forEach((pokemonInfo) => {
    const pokemonCard = createPokemonCard(pokemonInfo);
    ulPokemonList.appendChild(pokemonCard);
  });
}

function handleFavoriteEvent(btnFav) {
  // const btnFav = document.querySelector(".card__fav");

  btnFav.addEventListener("click", (event) => {
    console.log("evento acionado!!");

    btnFav.classList.toggle("fa-solid");
    btnFav.classList.toggle("fa-regular");
  });
}

function handleStatFilterEvent(pokemonArray) {
  const filterForm = document.querySelector(".filter__form");

  const attackFilterInput = document.querySelector("#attack__range-filter");
  const defenseFilterInput = document.querySelector("#defense__range-filter");
  const speedFilterInput = document.querySelector("#speed__range-filter");

  filterForm.addEventListener("input", (event) => {
    const currentFilterLabel = event.target.previousElementSibling;
    const currentLabelSpan = currentFilterLabel.querySelector("span");
    const currentInputValue = event.target.valueAsNumber;
    currentLabelSpan.innerText = currentInputValue;

    const attackValue = attackFilterInput.valueAsNumber;
    const defenseValue = defenseFilterInput.valueAsNumber;
    const speedValue = speedFilterInput.valueAsNumber;

    const filteredPokemonArray = pokemonArray.filter(
      ({ attack, defense, speed }) => {
        return (
          attack <= attackValue &&
          defense <= defenseValue &&
          speed <= speedValue
        );
      }
    );

    console.log(filteredPokemonArray);
    renderPokemonCards(filteredPokemonArray);
  });
}

async function main() {
  // CUIDA DO DARK MODE
  handleDarkMode();

  // TRAZ N POKEMONS DA API (31 POKEMONS NO EXEMPLO ABAIXO)
  const pokemonArray = await mountPokemonArray(31);
  // console.log(pokemonArray);

  // RENDERIZA OS POKEMONS E SUAS INFORMACOES NA TELA
  renderPokemonCards(pokemonArray);

  // handleFavoriteEvent();
  handleStatFilterEvent(pokemonArray);
}

main();
