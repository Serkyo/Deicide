ServerEvents.recipes(event => {
  const aquamiraeFood = ["spinefish"];

  aquamiraeFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `aquamirae:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `aquamirae:${id}`,
    });
  });
});
