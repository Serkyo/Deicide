ServerEvents.recipes(event => {
  const burntAddedFood = ["apple"];

  burntAddedFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `minecraft:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `minecraft:${id}`,
    });
  });
});
