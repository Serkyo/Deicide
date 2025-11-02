ServerEvents.recipes(event => {
  const mofusBetterEndFoods = ["icycle_fish"];
  const mofusBetterEndMetals = ["raw_titanium"];

  mofusBetterEndFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `mofus_better_end_:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `mofus_better_end_:${id}`,
    });
  });
  mofusBetterEndMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `mofus_better_end_:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `mofus_better_end_:${id}`,
    });
  });
});
