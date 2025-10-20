ServerEvents.recipes(event => {
  const oceansDelightFoods = [
    "tentacle_on_a_stick",
    "elder_guardian_slice",
    "guardian_tail",
    "stuffed_cod",
  ];
  oceansDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `oceansdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `oceansdelight:${id}`,
    });
  });
});
