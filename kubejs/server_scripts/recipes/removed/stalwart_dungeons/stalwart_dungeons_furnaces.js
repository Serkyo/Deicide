ServerEvents.recipes(event => {
  const stalwartDungeonsMetals = ["raw_tungsten", "tungsten_ore"];

  stalwartDungeonsMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `stalwart_dungeons:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `stalwart_dungeons:${id}`,
    });
  });
});
