ServerEvents.recipes(event => {
  const aquacultureDelightFood = ["small_turtle_meat"];

  aquacultureDelightFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `aquaculturedelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `aquaculturedelight:${id}`,
    });
  });
});
