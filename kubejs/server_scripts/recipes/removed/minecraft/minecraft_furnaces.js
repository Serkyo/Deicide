ServerEvents.recipes(event => {
  const minecraftFoods = [
    "potato",
    "beef",
    "chicken",
    "cod",
    "mutton",
    "porkchop",
    "rabbit",
    "salmon",
    "kelp",
  ];
  const minecraftMetals = [
    "copper_ore",
    "deepslate_copper_ore",
    "raw_copper",
    "deepslate_diamond_ore",
    "diamond_ore",
    "deepslate_emerald_ore",
    "emerald_ore",
    "deepslate_gold_ore",
    "gold_ore",
    "nether_gold_ore",
    "raw_gold",
    "golden_pickaxe",
    "golden_shovel",
    "golden_axe",
    "golden_hoe",
    "golden_sword",
    "golden_helmet",
    "golden_chestplate",
    "golden_leggings",
    "golden_boots",
    "golden_horse_armor",
    "deepslate_iron_ore",
    "iron_ore",
    "raw_iron",
    "iron_pickaxe",
    "iron_shovel",
    "iron_axe",
    "iron_hoe",
    "iron_sword",
    "iron_helmet",
    "iron_chestplate",
    "iron_leggings",
    "iron_boots",
    "iron_horse_armor",
    "chainmail_helmet",
    "chainmail_chestplate",
    "chainmail_leggings",
    "chainmail_boots",
    "deepslate_lapis_ore",
    "lapis_ore",
    "ancient_debris",
    "nether_quartz_ore",
    "deepslate_redstone_ore",
    "redstone_ore",
  ];
  const minecraftItems = [];
  minecraftFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `minecraft:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `minecraft:${id}`,
    });
  });
  minecraftMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `minecraft:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `minecraft:${id}`,
    });
  });
  minecraftItems.forEach(id => {
    event.remove({
      type: "minecraft:smoking",
      input: `minecraft:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `minecraft:${id}`,
    });
  });
});
