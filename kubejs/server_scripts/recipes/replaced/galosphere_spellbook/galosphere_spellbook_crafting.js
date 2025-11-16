ServerEvents.recipes(event => {
  //silver balance
  event.shaped(
    Item.of("galosphere_spellbooks:allurite_pendant", 1),
    [
      "A A",
      " A ", //
      " B ",
    ],
    {
      A: "#forge:ingots/silver",
      B: "galosphere:allurite_shard",
    }
  ),
    event.shaped(
      Item.of("galosphere_spellbooks:sterling_spell_book", 1),
      [
        "ABB",
        "CBB", //
        "ABB",
      ],
      {
        A: "#forge:ingots/silver",
        B: "minecraft:paper",
        C: "minecraft:leather",
      }
    );
});
