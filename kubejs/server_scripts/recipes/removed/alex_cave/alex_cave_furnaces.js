ServerEvents.recipes(event => {
  // Remove smelting and blasting recipes for various Alex's Caves foods
  const alexCaveFoods = [
    "dinosaur_chop",
    "mussel",
    "radgill",
    "trilocaris_tail",
    "tripodfish",
    "sweetish_fish_blue",
    "sweetish_fish_green",
    "sweetish_fish_pink",
    "sweetish_fish_red",
    "sweetish_fish_yellow",
    "lanternfish",
  ];

  alexCaveFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `alexscaves:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `alexscaves:${id}`,
    });
  });

  // Remove smelting and smoking recipes for various Alex's Caves metals
  const alexCaveMetals = [
    "unrefined_waste",
    "radrock_uranium_ore",
    "metal_swarf",
    "guanostone_redstone_ore",
    "packed_galena",
    "galena_iron_ore",
  ];

  alexCaveMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `alexscaves:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `alexscaves:${id}`,
    });
  });
});
