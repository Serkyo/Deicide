ServerEvents.recipes((event) => {
  //silver balance
  event.shaped(
    Item.of("macabre:sacrificial_dirk", 1),
    [
      "  A",
      "CB ", //
      "DC ",
    ],
    {
      A: "apotheosis:mythic_material",
      B: "traveloptics:excrucis",
      C: "quark:chiseled_myalite_bricks",
      D: "iceandfire:dragonbone",
    }
  )
})
