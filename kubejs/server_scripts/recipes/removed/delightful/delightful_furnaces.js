ServerEvents.recipes(event => {
  const delightfulFoods = ["cactus_flesh", "raw_goat", "venison_chops"];
  const delightfulMetals = ["brass_knife", "copper_knife", "zinc_knife"];
  const delightfulitems = ["bone_knife"];

  delightfulFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `delightful:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `delightful:${id}`,
    });
  });
  delightfulMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `delightful:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `delightful:${id}`,
    });
  });
  delightfulitems.forEach(id => {
    event.remove({
      type: "minecraft:blasting",
      input: `delightful:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `delightful:${id}`,
    });
  });
});
