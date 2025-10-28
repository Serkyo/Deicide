ServerEvents.recipes(event => {
  const biomeswevegoneFood = [
    "oddion_bulb",
    "white_puffball_cap",
    "yucca_fruit",
  ];

  biomeswevegoneFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `biomeswevegone:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `biomeswevegone:${id}`,
    });
  });
});
