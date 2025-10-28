ServerEvents.recipes(event => {
  const nethersExpFoods = ["hogham"];
  const nethersExpMetals = ["iron_scrap"];
  nethersExpFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `netherexp:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `netherexp:${id}`,
    });
  });

  nethersExpMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `netherexp:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `netherexp:${id}`,
    });
  });
});
