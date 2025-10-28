ServerEvents.recipes(event => {
  const galosphereMetals = ["deepslate_silver_ore", "raw_silver", "silver_ore"];
  galosphereMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `galosphere:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `galosphere:${id}`,
    });
  });
});
