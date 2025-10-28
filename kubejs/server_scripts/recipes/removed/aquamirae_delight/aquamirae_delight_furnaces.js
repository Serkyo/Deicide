ServerEvents.recipes(event => {
  const aquamiraeDelightFood = ["spinefish_slice"];
  const aquamiraeAddedDelightFood = ["golden_moth_in_a_jar"];

  aquamiraeDelightFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `aquamirae_delight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `aquamirae_delight:${id}`,
    });
  });
  aquamiraeAddedDelightFood.forEach(id => {
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
