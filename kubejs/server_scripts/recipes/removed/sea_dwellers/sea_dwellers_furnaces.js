ServerEvents.recipes(event => {
  const seaDwellersMetals = ["aquamarine_crystal"];

  seaDwellersMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `seadwellers:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `seadwellers:${id}`,
    });
  });
});
