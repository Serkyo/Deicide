ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting(
    "apotheosis:augmenting_table",
    [
      " DDD ",
      "DNNND", //
      "DGEGD",
      "DGGGD",
      "BBBBB",
    ],
    {
      N: "minecraft:nether_star",
      G: "apotheosis:mythic_material",
      E: "minecraft:enchanting_table",
      B: "minecraft:polished_blackstone",
      D: "#deicideadditions:dragon_blood",
    }
  );
  event.recipes.createMechanicalCrafting(
    Item.of("apotheosis:augmenting_table", 1),
    [
      "  D  ",
      " AAA ", //
      "FCECF",
      "FCCCF",
      "BBBBB",
    ],
    {
      A: "#forge:ingots/netherite",
      B: "minecraft:nether_bricks",
      C: "apotheosis:epic_material",
      D: "stalwart_dungeons:netherite_hammer",
      E: "apotheosis:simple_reforging_table",
      F: "apotheosis:sigil_of_enhancement",
    }
  );
});
