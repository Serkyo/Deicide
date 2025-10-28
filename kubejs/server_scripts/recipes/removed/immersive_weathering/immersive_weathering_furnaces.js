ServerEvents.recipes(event => {
  // Remove smelting and blasting recipes for various Alex's Caves foods
  const immersiveWeatheringMetals = [
    "clean_iron_smelting",
    "exposed_iron_smelting",
    "rusted_iron_smelting",
    "weathered_iron_smelting",
    "exposed_iron_bars",
    "rusted_iron_bars",
    "weathered_iron_bars",
  ];
  const immersiveWeatheringAddedMetals = ["iron_bars"];
  immersiveWeatheringMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `immersive_weathering:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `immersive_weathering:${id}`,
    });
  });
  immersiveWeatheringAddedMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `immersive_weathering:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `immersive_weathering:${id}`,
    });
  });
});
