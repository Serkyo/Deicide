LootJS.modifiers(event => {
  event
    .addLootTableModifier("champions:champion_loot") // Target the mod loot table
    .and(and => {
      and.killedByPlayer().customCondition({
        condition: "champions:champion_properties",
        entity: "this",
        tier: {
          min: 1,
          max: 1,
        },
      });
    })
    .addWeightedLoot(
      [1, 6],
      [Item.of("apotheosis:common_material").withChance(75)]
    );
  event
    .addLootTableModifier("champions:champion_loot") // Target the mod loot table
    .and(and => {
      and.killedByPlayer().customCondition({
        condition: "champions:champion_properties",
        entity: "this",
        tier: {
          min: 2,
          max: 2,
        },
      });
    })
    .addWeightedLoot(
      [1, 5],
      [Item.of("apotheosis:uncommon_material").withChance(65)]
    );
  event
    .addLootTableModifier("champions:champion_loot") // Target the mod loot table
    .and(and => {
      and.killedByPlayer().customCondition({
        condition: "champions:champion_properties",
        entity: "this",
        tier: {
          min: 3,
          max: 3,
        },
      });
    })
    .addWeightedLoot(
      [1, 4],
      [Item.of("apotheosis:rare_material").withChance(50)]
    );
  event
    .addLootTableModifier("champions:champion_loot") // Target the mod loot table
    .and(and => {
      and.killedByPlayer().customCondition({
        condition: "champions:champion_properties",
        entity: "this",
        tier: {
          min: 4,
          max: 4,
        },
      });
    })
    .addWeightedLoot(
      [1, 2],
      [Item.of("apotheosis:epic_material").withChance(40)]
    );
  event
    .addLootTableModifier("champions:champion_loot") // Target the mod loot table
    .and(and => {
      and.killedByPlayer().customCondition({
        condition: "champions:champion_properties",
        entity: "this",
        tier: {
          min: 5,
          max: 5,
        },
      });
    })
    .addWeightedLoot(
      [1, 1],
      [Item.of("apotheosis:mythic_material").withChance(25)]
    );
});
