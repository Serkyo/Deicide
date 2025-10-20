ServerEvents.recipes(event => {
  event.shaped(
    Item.of("dreadsteel:dreadsteel_ingot", 4),
    [
      "DHD",
      "FIL", // arg 2: the shape (array of strings)
      "DDD",
    ],
    {
      D: "iceandfire:dread_shard",
      F: "iceandfire:dragonsteel_fire_block",
      I: "iceandfire:dragonsteel_ice_block",
      L: "iceandfire:dragonsteel_lightning_block",
      H: "sculkhorde:heart_of_the_horde",
    }
  );
});
