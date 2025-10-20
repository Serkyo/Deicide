ServerEvents.recipes(event => {
  const biomeswevegoneFood = ["corpse_maggot"];

  biomeswevegoneFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `born_in_chaos_v1:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `born_in_chaos_v1:${id}`,
    });
  });
});
