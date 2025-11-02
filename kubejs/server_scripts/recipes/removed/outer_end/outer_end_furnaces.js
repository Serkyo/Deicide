ServerEvents.recipes(event => {
  const outerEndFoods = ["stalker_meat"];

  outerEndFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `outer_end:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `outer_end:${id}`,
    });
  });
});
