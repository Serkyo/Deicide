ServerEvents.recipes(event => {
  const dungeonsdelightFoods = ["sniffer_shank", "snifferwurst"];

  dungeonsdelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `dungeonsdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `dungeonsdelight:${id}`,
    });
  });
});
