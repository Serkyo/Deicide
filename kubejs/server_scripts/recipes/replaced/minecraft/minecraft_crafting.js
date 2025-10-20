ServerEvents.recipes(event => {
  // Blast furnace
  event.shaped(
    Item.of("minecraft:blast_furnace", 1),
    [
      "BBB",
      "BCB", //
      "AAA",
    ],
    {
      A: "minecraft:deepslate_bricks",
      B: "#forge:ingots/copper",
      C: "minecraft:furnace",
    }
  );
  // Chainmail armor
  // Helmet
  event.shaped(
    Item.of("minecraft:chainmail_helmet", 1),
    [
      "AAA",
      "B B", //
    ],
    {
      A: "minecraft:chain",
      B: "#forge:nuggets/iron",
    }
  );
  // Chestplate
  event.shaped(
    Item.of("minecraft:chainmail_chestplate", 1),
    [
      "A A",
      "ABA", //
      "AAA",
    ],
    {
      A: "minecraft:chain",
      B: "#forge:nuggets/iron",
    }
  );
  // Leggings
  event.shaped(
    Item.of("minecraft:chainmail_leggings", 1),
    [
      "AAA",
      "A A", //
      "B B",
    ],
    {
      A: "minecraft:chain",
      B: "#forge:nuggets/iron",
    }
  );
  // Boots
  event.shaped(
    Item.of("minecraft:chainmail_boots", 1),
    [
      "A A",
      "B B", //
    ],
    {
      A: "minecraft:chain",
      B: "#forge:nuggets/iron",
    }
  );
  //Gold armor
  // Helmet
  event.shaped(
    Item.of("minecraft:golden_helmet", 1),
    [
      "BAB",
      "A A", //
    ],
    {
      A: "#forge:ingots/gold",
      B: "create:golden_sheet",
    }
  );
  // Chestplate
  event.shaped(
    Item.of("minecraft:golden_chestplate", 1),
    [
      "B B",
      "AAA", //
      "BAB",
    ],
    {
      A: "#forge:ingots/gold",
      B: "create:golden_sheet",
    }
  );
  // Leggings
  event.shaped(
    Item.of("minecraft:golden_leggings", 1),
    [
      "BAB",
      "A A", //
      "B B",
    ],
    {
      A: "#forge:ingots/gold",
      B: "create:golden_sheet",
    }
  );
  // Boots
  event.shaped(
    Item.of("minecraft:golden_boots", 1),
    [
      "A A",
      "B B", //
    ],
    {
      A: "#forge:ingots/gold",
      B: "create:golden_sheet",
    }
  );
  //Iron armor
  // Helmet
  event.shaped(
    Item.of("minecraft:iron_helmet", 1),
    [
      "BAB",
      "A A", //
    ],
    {
      A: "#forge:ingots/iron",
      B: "create:iron_sheet",
    }
  );
  // Chestplate
  event.shaped(
    Item.of("minecraft:iron_chestplate", 1),
    [
      "B B",
      "AAA", //
      "BAB",
    ],
    {
      A: "#forge:ingots/iron",
      B: "create:iron_sheet",
    }
  );
  // Leggings
  event.shaped(
    Item.of("minecraft:iron_leggings", 1),
    [
      "BAB",
      "A A", //
      "B B",
    ],
    {
      A: "#forge:ingots/iron",
      B: "create:iron_sheet",
    }
  );
  // Boots
  event.shaped(
    Item.of("minecraft:iron_boots", 1),
    [
      "A A",
      "B B", //
    ],
    {
      A: "#forge:ingots/iron",
      B: "create:iron_sheet",
    }
  );
  //Diamond armor
  // Helmet
  event.shaped(
    Item.of("minecraft:diamond_helmet", 1),
    [
      "BAB",
      "A A", //
    ],
    {
      A: "#forge:gems/diamond",
      B: "deicideadditions:diamond_sheet",
    }
  );
  // Chestplate
  event.shaped(
    Item.of("minecraft:diamond_chestplate", 1),
    [
      "B B",
      "AAA", //
      "BAB",
    ],
    {
      A: "#forge:gems/diamond",
      B: "deicideadditions:diamond_sheet",
    }
  );
  // Leggings
  event.shaped(
    Item.of("minecraft:diamond_leggings", 1),
    [
      "BAB",
      "A A", //
      "B B",
    ],
    {
      A: "#forge:gems/diamond",
      B: "deicideadditions:diamond_sheet",
    }
  );
  // Boots
  event.shaped(
    Item.of("minecraft:diamond_boots", 1),
    [
      "A A",
      "B B", //
    ],
    {
      A: "#forge:gems/diamond",
      B: "deicideadditions:diamond_sheet",
    }
  );
  //Leather armor
  // Helmet
  event.shaped(
    Item.of("minecraft:leather_helmet", 1),
    [
      "BBB",
      "B B", //
    ],
    {
      B: "deicideadditions:leather_strap",
    }
  );
  // Chestplate
  event.shaped(
    Item.of("minecraft:leather_chestplate", 1),
    [
      "B B",
      "BBB", //
      "BBB",
    ],
    {
      B: "deicideadditions:leather_strap",
    }
  );
  // Leggings
  event.shaped(
    Item.of("minecraft:leather_leggings", 1),
    [
      "BBB",
      "B B", //
      "B B",
    ],
    {
      B: "deicideadditions:leather_strap",
    }
  );
  // Boots
  event.shaped(
    Item.of("minecraft:leather_boots", 1),
    [
      "B B",
      "B B", //
    ],
    {
      B: "deicideadditions:leather_strap",
    }
  );
});
