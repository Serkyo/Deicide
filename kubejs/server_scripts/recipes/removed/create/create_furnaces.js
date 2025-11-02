ServerEvents.recipes(event => {
  const createFood = ["dough"];
  const createMetal = [
    "crushed_raw_gold",
    "crushed_raw_iron",
    "crushed_raw_silver",
    "crushed_raw_zinc",
  ];

  createFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `create:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `create:${id}`,
    });
  });
  createMetal.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `create:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `create:${id}`,
    });
  });
});
