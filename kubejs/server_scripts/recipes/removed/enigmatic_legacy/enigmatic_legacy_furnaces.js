ServerEvents.recipes(event => {
  const enigmaticlegacylMetals = ["etherium_ore"];

  enigmaticlegacylMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `enigmaticlegacy:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `enigmaticlegacy:${id}`,
    });
  });
});
