ServerEvents.recipes(event => {
  // // Bread
  // event.remove({});
  // // Cookie
  event.remove({
    id: "minecraft:cake",
  });
  event.remove({
    id: "minecraft:blast_furnace",
  });
  event.remove({
    id: "quark:building/crafting/furnaces/deepslate_blast_furnace",
  });
  event.remove({
    id: "quark:building/crafting/furnaces/blackstone_blast_furnace",
  });
  event.remove({
    output: "minecraft:netherite_ingot",
    type: "minecraft:crafting_shapeless",
  });
  event.remove({
    id: "minecraft:chainmail_helmet",
  });
  event.remove({
    id: "minecraft:chainmail_chestplate",
  });
  event.remove({
    id: "minecraft:chainmail_leggings",
  });
  event.remove({
    id: "minecraft:chainmail_boots",
  });
});
