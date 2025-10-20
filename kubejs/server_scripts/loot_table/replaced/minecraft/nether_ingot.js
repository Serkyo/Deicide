ServerEvents.recipes(event => {
  event.recipes
    .createMixing("minecraft:netherite_ingot", [
      "#forge:ingots/gold",
      "#forge:ingots/gold",
      "#forge:ingots/gold",
      "#forge:ingots/gold",
      "minecraft:netherite_scrap",
      "minecraft:netherite_scrap",
      "minecraft:netherite_scrap",
      "minecraft:netherite_scrap",
      Fluid.of("minecraft:lava", 250),
    ])
    .superheated();
});
