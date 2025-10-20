ServerEvents.recipes(event => {
  // // Bread
  // event.remove({});
  // // Cookie
  // event.remove({});
  // // Cake
  event.remove({
    id: "minecraft:cake",
  });
  event.remove({
    output: "minecraft:netherite_ingot",
    type: "minecraft:crafting_shapeless",
  });
});
