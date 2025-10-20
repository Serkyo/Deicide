LootJS.modifiers(event => {
  event
    .addBlockLootModifier("minecraft:diamond_ore")
    .replaceLoot("minecraft:diamond", "deicideadditions:rough_diamond")
    .applyOreBonus("minecraft:fortune");
  event
    .addBlockLootModifier("minecraft:deepslate_diamond_ore")
    .replaceLoot("minecraft:diamond", "deicideadditions:rough_diamond")
    .applyOreBonus("minecraft:fortune");
});
