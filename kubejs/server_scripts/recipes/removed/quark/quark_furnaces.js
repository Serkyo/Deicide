ServerEvents.recipes(event => {
  const quarkFoods = ["crab_leg"];
  const quarkMetals = [
    "raw_copper_bricks",
    "raw_gold_bricks",
    "raw_iron_bricks",
  ];
  const quarkAddedMetals = [
    "raw_copper_block",
    "raw_gold_block",
    "raw_iron_block",
  ];

  quarkFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `quark:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `quark:${id}`,
    });
  });
  quarkMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `quark:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `quark:${id}`,
    });
  });
  quarkAddedMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `minecraft:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `minecraft:${id}`,
    });
  });
});
