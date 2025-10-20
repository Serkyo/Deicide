ServerEvents.recipes(event => {
  // Cook 1 crushed_raw_copper into 1 gravel in a Furnace:
  event.smelting("1x minecraft:copper_ingot", "create:crushed_raw_copper");
});
