ServerEvents.recipes(event => {
  const nethersDelightFoods = ["hoglin_loin"];
  const nethersDelightMetals = ["golden_machete", "iron_machete"];
  nethersDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `nethersdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `nethersdelight:${id}`,
    });
  });

  nethersDelightMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `nethersdelight:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `nethersdelight:${id}`,
    });
  });
});
