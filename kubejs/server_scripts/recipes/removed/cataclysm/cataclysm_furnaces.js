ServerEvents.recipes(event => {
  const cataclysmMetals = [
    "khopesh",
    "ancient_spear",
    "black_steel_axe",
    "black_steel_sword",
    "black_steel_shovel",
    "black_steel_hoe",
    "black_steel_pickaxe",
  ];

  cataclysmMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `cataclysm:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `cataclysm:${id}`,
    });
  });
});
