ServerEvents.recipes(event => {
  // Remove smelting and blasting recipes for various Alex's Caves foods
  const jadensNetherExpansionDelightFoods = [
    "hogham_slice",
    "wraithing_flesh_slice",
  ];
  const jadensNetherExpansionDelightAddedFoods = ["wraithing_flesh"];
  jadensNetherExpansionDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `jadensnetherexpansiondelight:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `jadensnetherexpansiondelight:${id}`,
    });
  });
  jadensNetherExpansionDelightAddedFoods.forEach(id => {
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
