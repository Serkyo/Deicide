ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting(
    Item.of("ancientreforging:ancient_reforging_table", 1),
    [
      "FFFFF",
      "EAAAE", //
      "EBCBE",
      "EBBBE",
      "DDDDD",
    ],
    {
      A: "apotheosis:ancient_material",
      B: "apotheosis:mythic_material",
      C: "apotheosis:reforging_table",
      D: "minecraft:nether_bricks",
      E: "irons_spellbooks:dragonskin",
      F: "apotheosis:sigil_of_enhancement",
    }
  );
});
