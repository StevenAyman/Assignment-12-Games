"use strict";

// Game constructor function
export function Game(id, image, name, shortDescription, category, platform) {
  this.id = id;
  this.image = image;
  this.name = name;
  this.shortDescription = shortDescription;
  this.category = category;
  this.platform = platform;
}
