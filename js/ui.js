"use strict";

import { Game } from "./games.js";
import { GameDetails } from "./details.js";

// Function to display game cards in html
export function displayGames(gamesArray) {
  let cartona = "";
  for (let i = 0; i < gamesArray.length; i++) {
    let game = new Game(
      gamesArray[i].id,
      gamesArray[i].thumbnail,
      gamesArray[i].title,
      gamesArray[i].short_description,
      gamesArray[i].genre,
      gamesArray[i].platform
    );
    // Html elemnt
    cartona += `
    <div class="col-xl-3 col-lg-4 col-md-6">
    <div class="card border-black mb-3 bg-transparent">
      <div class="image p-3 pb-0">
        <img
          src="${game.image}"
          class="card-img-top"
          alt="Game photo"
        />
      </div>
      <div class="card-body px-3">
        <div
          class="card-title d-flex justify-content-between align-items-center"
        >
          <h5 class="text-white fs-6">${game.name}</h5>
          <span class="badge py-2">Free</span>
        </div>
        <p class="card-text text-secondary text-center">
          ${game.shortDescription}
        </p>
      </div>
      <div
        class="card-footer d-flex justify-content-between align-items-center"
      >
        <input type="hidden" class="id" value=" ${game.id} " />
        <span class="badge text-bg-secondary"> ${game.category} </span>
        <span class="badge text-bg-secondary"> ${game.platform} </span>
      </div>
    </div>
  </div>
  `;
  }

  // To add all cards in html container and make it displayed
  document.querySelector(".games-section .row").innerHTML = cartona;
}

// Function to display game information in html
export function displayGameInfo(game) {
  let gameInfo = new GameDetails(
    game.thumbnail,
    game.title,
    game.short_description,
    game.genre,
    game.platform,
    "Live",
    game.game_url
  );

  document
    .querySelector(".game-details .image img")
    .setAttribute("src", gameInfo.image);
  document.querySelector(".game-details .game-title").innerHTML = gameInfo.name;
  document.querySelector(".game-details .game-category").innerHTML =
    gameInfo.category;
  document.querySelector(".game-details .game-platform").innerHTML =
    gameInfo.platform;
  document.querySelector(".game-details .game-status").innerHTML =
    gameInfo.status;
  document.querySelector(".game-details .game-desc").innerHTML =
    gameInfo.description;
  document
    .querySelector(".game-details .show-game")
    .setAttribute("href", gameInfo.gameUrl);

  // To hide games section and display game info page
  document.querySelector("header").classList.add("d-none");
  document.querySelector(".position-sticky").classList.add("d-none");
  document.querySelector(".games-section").classList.add("d-none");
  document.querySelector(".game-details").classList.remove("d-none");
}

// To hide game info page and display games section when close button is clicked
document
  .querySelector(".game-details .close")
  .addEventListener("click", function () {
    document.querySelector("header").classList.remove("d-none");
    document.querySelector(".position-sticky").classList.remove("d-none");
    document.querySelector(".games-section").classList.remove("d-none");
    document.querySelector(".game-details").classList.add("d-none");
  });
