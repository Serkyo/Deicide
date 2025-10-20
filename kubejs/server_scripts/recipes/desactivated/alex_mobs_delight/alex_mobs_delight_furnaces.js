ServerEvents.recipes(event => {
  // Remove smelting and blasting recipes for various Alex's Caves Delight foods
  const delightAlexMobsFoods = [
    "raw_bison",
    "bison_mince",
    "raw_bunfungus",
    "raw_bunfungus_drumstick",
    "raw_catfish_slice",
    "kangaroo_shank",
    "loose_moose_rib",
  ];

  delightAlexMobsFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `alexsdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `alexsdelight:${id}`,
    });
  });
  // Remove smelting and blasting recipes for various Alex's Caves Delight added foods
  const delightAddedAlexMobsFoods = ["centipede_leg"];

  delightAddedAlexMobsFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `alexsmobs:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `alexsmobs:${id}`,
    });
  });
});
