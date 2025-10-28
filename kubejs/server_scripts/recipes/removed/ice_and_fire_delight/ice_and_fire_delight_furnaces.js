ServerEvents.recipes(event => {
  const iceAndFireDelightFoods = [
    "hydra_meat",
    "sea_serpent_meat",
    "sea_serpent_slice",
    "troll_meat",
    "cyclops_meat",
    "dough_from_dragon_bones",
    "raw_mini_pizza_blank",
  ];
  const iceAndFireDelightAddeedFoods = ["shiny_scales"];
  iceAndFireDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `ice_and_fire_delight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `ice_and_fire_delight:${id}`,
    });
  });
  iceAndFireDelightAddeedFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `iceandfire:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `iceandfire:${id}`,
    });
  });
});
