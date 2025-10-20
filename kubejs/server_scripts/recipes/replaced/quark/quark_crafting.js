ServerEvents.recipes(event => {
  // quark furnaces
  // blackstone furnace -> blast furnace
  event.shaped(
    Item.of("minecraft:blast_furnace", 1),
    [
      "BBB",
      "BCB", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:bricks",
      B: "#forge:ingots/copper",
      C: "quark:blackstone_furnace",
    }
  );
  // deepslape furnace -> blast furnace
  event.shaped(
    Item.of("minecraft:blast_furnace", 1),
    [
      "BBB",
      "BCB", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:bricks",
      B: "#forge:ingots/copper",
      C: "deepslate_furnace",
    }
  );
});
