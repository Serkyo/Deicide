ServerEvents.recipes(event => {
  const ecologicsFoods = ["prickly_pear", "crab_claw"];

  ecologicsFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `ecologics:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `ecologics:${id}`,
    });
  });
});
