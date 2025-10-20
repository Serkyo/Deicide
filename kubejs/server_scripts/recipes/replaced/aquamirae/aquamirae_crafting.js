ServerEvents.recipes(event => {
  // Aquamirae Abyssal Armor
  // Aquamirae Abyssal heaume
  event.shaped(
    Item.of("aquamirae:abyssal_heaume", 1),
    [
      "ABA",
      "C C", // arg 2: the shape (array of strings)
    ],
    {
      A: "aquamirae:abyssal_amethyst",
      B: "born_in_chaos_v1:dark_metal_armor_helmet",
      C: "minecraft:netherite_ingot",
    }
  );
  // Aquamirae Abyssal brigantine
  event.shaped(
    Item.of("aquamirae:abyssal_brigantine", 1),
    [
      "A A",
      "ABA", // arg 2: the shape (array of strings)
      "CAC",
    ],
    {
      A: "aquamirae:abyssal_amethyst",
      B: "born_in_chaos_v1:dark_metal_armor_chestplate",
      C: "minecraft:netherite_ingot",
    }
  );
  // Aquamirae Abyssal leggings
  event.shaped(
    Item.of("aquamirae:abyssal_leggings", 1),
    [
      "CBC",
      "A A", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "aquamirae:abyssal_amethyst",
      B: "born_in_chaos_v1:dark_metal_armor_leggings",
      C: "minecraft:netherite_ingot",
    }
  );
  // Aquamirae Abyssal Boots
  event.shaped(
    Item.of("aquamirae:abyssal_boots", 1), // arg 1: output
    [
      "ABA",
      "A A", // arg 2: the shape (array of strings)
      "C C",
    ],
    {
      A: "aquamirae:abyssal_amethyst",
      B: "born_in_chaos_v1:dark_metal_armor_boots", //arg 3: the mapping object
      C: "minecraft:netherite_ingot",
    }
  );
});
