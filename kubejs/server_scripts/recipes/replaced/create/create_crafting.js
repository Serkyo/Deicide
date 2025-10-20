ServerEvents.recipes(event => {
  // Remove all existing chain recipes
  event.remove({output: "minecraft:chain"});

  // Add your custom chain recipe
  event.shaped(Item.of("minecraft:chain", 2), ["B", "A", "B"], {
    A: "#forge:ingots/zinc",
    B: "#forge:nuggets/zinc",
  });
});
