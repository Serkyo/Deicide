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
    .addAlternativesLoot(
      LootEntry.of(Item.of("apotheosis:common_material"))
        .when(c => (c = true))
        .limitCount([1, 5])
    );
  event
    .addLootTableModifier("champions:champion_loot")
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
    .addAlternativesLoot(
      LootEntry.of(Item.of("apotheosis:uncommon_material"))
        .when(c => c.randomChance(0.6))
        .limitCount([1, 4]),

      LootEntry.of(Item.of("apotheosis:common_material"))
        .when(c => (c = true)) //c.randomChance(0.4))
        .limitCount([2, 6])
    );
  event
    .addLootTableModifier("champions:champion_loot")
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
    .addAlternativesLoot(
      LootEntry.of(Item.of("apotheosis:rare_material"))
        .when(c => c.randomChance(0.5))
        .limitCount([1, 3]),

      LootEntry.of(Item.of("apotheosis:uncommon_material"))
        .when(c => c.randomChance(0.3))
        .limitCount([2, 5]),

      LootEntry.of(Item.of("apotheosis:common_material"))
        .when(c => (c = true)) //c.randomChance(0.2))
        .limitCount([3, 7])
    );
  event
    .addLootTableModifier("champions:champion_loot")
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
    .addAlternativesLoot(
      LootEntry.of(Item.of("apotheosis:epic_material"))
        .when(c => c.randomChance(0.4))
        .limitCount([1, 2]),

      LootEntry.of(Item.of("apotheosis:rare_material"))
        .when(c => c.randomChance(0.35))
        .limitCount([2, 4]),

      LootEntry.of(Item.of("apotheosis:uncommon_material"))
        .when(c => (c = true)) //c.randomChance(0.25))
        .limitCount([3, 6])
    );
  event
    .addLootTableModifier("champions:champion_loot")
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
    .addAlternativesLoot(
      LootEntry.of(Item.of("apotheosis:mythic_material"))
        .when(c => c.randomChance(0.3))
        .limitCount([1, 1]),

      LootEntry.of(Item.of("apotheosis:epic_material"))
        .when(c => c.randomChance(0.4))
        .limitCount([2, 3]),

      LootEntry.of(Item.of("apotheosis:rare_material"))
        .when(c => (c = true)) //c.randomChance(0.3))
        .limitCount([3, 5])
    );
});
