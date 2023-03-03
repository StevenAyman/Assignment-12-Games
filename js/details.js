"use strict";

// Game detials constructor function
export function GameDetails(
  image,
  name,
  description,
  category,
  platform,
  status,
  gameUrl
) {
  this.image = image;
  this.name = name;
  this.description = description;
  this.category = category;
  this.platform = platform;
  this.status = status;
  this.gameUrl = gameUrl;
}
