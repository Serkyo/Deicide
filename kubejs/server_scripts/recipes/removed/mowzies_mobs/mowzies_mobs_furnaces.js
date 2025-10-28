ServerEvents.recipes(event => {
  const mowiesMobsMetals = ["captured_grottol"];

  mowiesMobsMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `mowziesmobs:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `mowziesmobs:${id}`,
    });
  });
});
