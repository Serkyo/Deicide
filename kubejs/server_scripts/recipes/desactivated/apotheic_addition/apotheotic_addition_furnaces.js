ServerEvents.recipes(event => {
  const apotheotic_addition = [];
  const apotheoticRecipesAdded = ["common_material"];

  apotheoticRecipesAdded.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `apotheosis:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `apotheosis:${id}`,
    });
  });
});
