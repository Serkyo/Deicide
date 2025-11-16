ServerEvents.recipes(event => {
  //silver balance
  event.shaped(
    Item.of("galosphere:silver_balance", 1),
    [
      "ABA",
      " A ", //
      " A ",
    ],
    {
      A: "#forge:ingots/silver",
      B: "minecraft:redstone",
    }
  ),
    event.shaped(
      Item.of("galosphere:pink_salt_lamp", 1),
      [
        "A",
        "B", //
      ],
      {
        A: "galosphere:pink_salt_cluster",
        B: "#forge:ingots/silver",
      }
    ),
    event.shaped(
      Item.of("galosphere:barometer", 1),
      [
        " A ",
        "ABA", //
        " A ",
      ],
      {
        A: "#forge:ingots/silver",
        B: "minecraft:redstone",
      }
    ),
    event.shaped(
      Item.of("galosphere:silver_block", 1),
      [
        "AAA",
        "AAA", //
        "AAA",
      ],
      {
        A: "#forge:ingots/silver",
      }
    ),
    event.shaped(
      Item.of("galosphere:shadow_frame", 8),
      [
        "ABA",
        "BAB", //
        "ABA",
      ],
      {
        A: "#forge:ingots/silver",
        B: "galosphere:cured_membrane",
      }
    ),
    event.shaped(
      Item.of("galosphere:silver_upgrade_smithing_template", 2),
      [
        "ACA",
        "ABA", //
        "AAA",
      ],
      {
        A: "#minecraft:planks",
        B: "#forge:ingots/silver",
        C: "galosphere:silver_upgrade_smithing_template",
      }
    ),
    event.shaped(
      Item.of("galosphere:silver_lattice", 16),
      [
        "AAA",
        "AAA", //
      ],
      {
        A: "#forge:ingots/silver",
      }
    );
});
