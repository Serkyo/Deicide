ServerEvents.recipes(event => {
  const minersDelightFoods = [
    "cave_carrot",
    "squid",
    "glow_squid",
    "tentacles",
    "bat_wing",
  ];
  minersDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `miners_delight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `miners_delight:${id}`,
    });
  });
});
