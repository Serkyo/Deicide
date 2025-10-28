ServerEvents.recipes(event => {
  const farmersDelightFoods = [
    "minced_beef",
    "wheat_dough",
    "bacon",
    "chicken_cuts",
    "cod_slice",
    "mutton_chops",
    "salmon_slice",
  ];
  const farmersDelightMetals = ["iron_knife"];
  const farmersdelightAddedFoods = ["egg"];
  farmersDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `farmersdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `farmersdelight:${id}`,
    });
  });
  farmersdelightAddedFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `minecraft:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `minecraft:${id}`,
    });
  });
  farmersDelightMetals.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `farmersdelight:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `farmersdelight:${id}`,
    });
  });
});
