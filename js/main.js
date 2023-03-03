"use strict";

import { displayGames, displayGameInfo } from "./ui.js";

const allCategories = document.querySelectorAll(".nav-link ");
let allGames = [];

// To display the default category when the brower reload
getAllGamesData();

// Function to get all games data depend on category
async function getAllGamesData(category = "mmorpg") {
  // To display the loading screen untill the data come
  document.querySelector(".loading").classList.remove("d-none");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f57b81df79msh3a4c9644c9554e8p15feb3jsn213fa96668d4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    options
  );
  let fResult = await response.json();
  displayGames(fResult);

  // To hide the loading screen after we got the data
  document.querySelector(".loading").classList.add("d-none");

  allGames = document.querySelectorAll(".card");
  getGameId();
}

// Function to get the data of one game
async function getGameData(id) {
  // To display the loading screen untill the data come
  document.querySelector(".loading").classList.remove("d-none");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f57b81df79msh3a4c9644c9554e8p15feb3jsn213fa96668d4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  let gameData = await response.json();

  // Displaying Game info after the data had come
  displayGameInfo(gameData);

  // To hide the loading screen after we got the data
  document.querySelector(".loading").classList.add("d-none");
}

// TO loop on all categories
for (let i = 0; i < allCategories.length; i++) {
  allCategories[i].addEventListener("click", function () {
    let link = allCategories[i].innerHTML.trim().toLowerCase();
    document.querySelector(".active-link").classList.remove("active-link");
    allCategories[i].classList.add("active-link");
    getAllGamesData(link);
  });
}

// Function to loop on all games elements and get id of clicked element
function getGameId() {
  for (let i = 0; i < allGames.length; i++) {
    allGames[i].addEventListener("click", function () {
      // Getting the id of selected element
      let id = allGames[i].querySelector('[type="hidden"]').value;

      // Sending the id to get the data from the api
      getGameData(id);
    });
  }
}
