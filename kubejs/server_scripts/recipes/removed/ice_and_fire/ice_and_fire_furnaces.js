ServerEvents.recipes(event => {
  const iceAndFireMetals = [
    "raw_silver",
    "copper_pickaxe",
    "copper_axe",
    "copper_shovel",
    "copper_hoe",
    "copper_sword",
    "armor_copper_metal_helmet",
    "armor_copper_metal_chestplate",
    "armor_copper_metal_leggings",
    "armor_copper_metal_boots",
    "deepslate_silver_ore",
    "sapphire_ore",
    "silver_ore",
    "silver_pickaxe",
    "silver_axe",
    "silver_shovel",
    "silver_hoe",
    "silver_sword",
    "armor_silver_metal_helmet",
    "armor_silver_metal_chestplate",
    "armor_silver_metal_leggings",
    "armor_silver_metal_boots",
  ];
  iceAndFireMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `iceandfire:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `iceandfire:${id}`,
    });
  });
});
