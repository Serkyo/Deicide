ServerEvents.recipes(event => {
  const alexMobsFoods = [
    "emu_egg",
    "raw_catfish",
    "kangaroo_meat",
    "lobster_tail",
    "moose_ribs",
  ];

  alexMobsFoods.forEach(id => {
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
