ServerEvents.recipes(event => {
  //silver balance
  event.shaped(
    Item.of("irons_spellbooks:silver_ring", 1),
    [
      " A ",
      "A A", //
      " A ",
    ],
    {
      A: "#forge:ingots/silver",
    }
  );
});
