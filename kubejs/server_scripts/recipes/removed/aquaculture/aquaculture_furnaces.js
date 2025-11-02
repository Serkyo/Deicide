ServerEvents.recipes(event => {
  const aquacultureFood = ["fish_fillet_raw"];

  aquacultureFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `aquaculture:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `aquaculture:${id}`,
    });
  });
  const aquacultureMetal = [
    "gold_fishing_rod",
    "gold_fillet_knife",
    "iron_fishing_rod",
    "iron_fillet_knife",
    "tin_can",
  ];

  aquacultureMetal.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `aquaculture:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `aquaculture:${id}`,
    });
  });
});
