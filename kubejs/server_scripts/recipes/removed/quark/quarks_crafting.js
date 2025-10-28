// kubejs/server_scripts/recipes/desactivated/quark/quarks_crafting.js

// Remove the specific Quark mod recipe (shaped, group: bread, pattern: ["##", "# "], wheat -> air)
ServerEvents.recipes(event => {
  event.remove({
    type: "minecraft:crafting_shaped",
    group: "bread",
    pattern: [
      "AA",
      "A ", // je pose ça la sinon mon formattage auto bouge les truc
    ],
    key: {
      A: "minecraft:wheat",
    },
  });
  event.remove({
    type: "minecraft:crafting_shaped",
    group: "cookie",
    pattern: [
      "BA",
      "A ", // je pose ça la sinon mon formattage auto bouge les truc
    ],
    key: {
      A: "minecraft:wheat",
      B: "minecraft:cocoa_beans",
    },
  });
});
