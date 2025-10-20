ServerEvents.recipes(event => {
  event.shaped(
    Item.of("majruszsdifficulty:enderium_upgrade_smithing_template", 2),
    [
      "ACA",
      "ABA", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "aquamirae:abyssal_amethyst",
      B: "minecraft:end_stone",
      C: "majruszsdifficulty:enderium_upgrade_smithing_template",
    }
  );
});
