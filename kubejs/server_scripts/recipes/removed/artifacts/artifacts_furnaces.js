ServerEvents.recipes(event => {
  const artifactsFood = ["everlasting_beef"];

  artifactsFood.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `artifacts:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `artifacts:${id}`,
    });
  });
});
