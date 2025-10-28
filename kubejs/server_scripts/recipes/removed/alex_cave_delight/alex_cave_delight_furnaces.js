ServerEvents.recipes(event => {
  // Remove smelting and blasting recipes for various Alex's Caves Delight foods
  const delightAlexcaveFoods = ["cut_radgill", "cut_trilocaris_tail"];

  delightAlexcaveFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `alexscavesdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `alexscavesdelight:${id}`,
    });
  });
  // Remove smelting and blasting recipes for various Alex's Caves Delight added foods
  const delightAddedAlexCaveFoods = [
    "ferrouslime_ball",
    "heart_of_iron",
    "relicheirus_egg",
    "tremorsaurus_egg",
    "tremorzilla_egg",
  ];

  delightAddedAlexCaveFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `alexscaves:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `alexscaves:${id}`,
    });
  });
});
