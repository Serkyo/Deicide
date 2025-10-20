ServerEvents.recipes(event => {
  const forgeFood = ["nuts/acorn"];
  const forgeMetal = ["ores/zinc", "raw_materials/zinc"];

  forgeFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `#forge:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `#forge:${id}`,
    });
  });
  forgeMetal.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `#forge:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `#forge:${id}`,
    });
  });
});
