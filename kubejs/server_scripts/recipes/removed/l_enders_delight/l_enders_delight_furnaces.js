ServerEvents.recipes(event => {
  const lEndersDelightFoods = [
    "raw_warlock_deepling_meat",
    "raw_brute_deepling_meat",
    "raw_deepling_meat",
    "netherite_monstrosity_meat",
    "leviathan",
    "koboleton_meat",
    "ender_golem_meat",
    "crab_legs",
    "coral_golem_meat",
    "berserker",
    "amethyst_crab_meat_slice",
  ];
  const lEndersDelightAddedFoods = [
    "lionfish",
    "amethyst_crab_meat",
    "abyssal_egg",
  ];

  lEndersDelightFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `lendersdelight:${id}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `lendersdelight:${id}`,
    });
  });
  lEndersDelightAddedFoods.forEach(id => {
    event.remove({
      type: "minecraft:smelting",
      input: `cataclysm:${id}`,
    });
    event.remove({
      type: "minecraft:smoking",
      input: `cataclysm:${id}`,
    });
  });
});
