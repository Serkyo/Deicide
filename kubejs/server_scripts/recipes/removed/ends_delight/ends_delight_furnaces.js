ServerEvents.recipes(event => {
  const endsDelightFoods = [
    "raw_ender_mite_meat",
    "raw_ender_sausage",
    "liquid_dragon_egg",
    "raw_dragon_meat",
    "raw_dragon_meat_cuts",
    "shulker_meat",
    "shulker_meat_slice",
    "shulker_omelette_mixture",
  ];

  endsDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `ends_delight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `ends_delight:${id}`,
    });
  });
});
