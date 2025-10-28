ServerEvents.recipes(event => {
  const thalassophobiaFoods = [
    "raw_crab",
    "raw_fish_meat",
    "raw_glow_fish",
    "raw_hesperornis",
    "raw_sea_bird",
  ];
  thalassophobiaFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `thalassophobia:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `thalassophobia:${id}`,
    });
  });
});
