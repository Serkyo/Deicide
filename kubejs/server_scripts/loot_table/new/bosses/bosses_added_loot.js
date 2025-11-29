LootJS.modifiers((event) => {
  const chap_1 = [
    "galosphere:berserker",
    "legendary_monsters:ancient_guardian",
    "legendary_monsters:frostbitten_golem",
    "legendary_monsters:overgrown_colossus",
    "minecraft:elder_guardian",
    "legendary_monsters:posessed_paladin",
    "mowziesmobs:ferrous_wroughtnaut",
    "dungeonnowloading:chaos_spawner",
    "bosses_of_mass_destruction:lich",
    "mowziesmobs:umvuthi",
    "soulsweapons:draugr_boss",
  ]
  const chap_2 = [
    "bosses_of_mass_destruction:void_blossom",
    "legendary_monsters:withered_abomination",
    "irons_spellbooks:dead_king",
    "block_factorys_bosses:yeti",
    "aquamirae:captain_cornelia",
    "born_in_chaos_v1:lord_pumpkinhead",
    "soulsweapons:accursed_lord_boss",
    "hadean_breathe:hadean_enforcer",
    "legendary_monsters:cloud_golem",
    "block_factorys_bosses:sandworm",
    "graveyard:lich",
  ]
  const chap_3 = [
    "block_factorys_bosses:infernal_dragon",
    "soulsweapons:returning_knight",
    "block_factorys_bosses:underworld_knight",
    "cataclysm:netherite_monstrosity",
    "mowziesmobs:frostmaw",
    "bosses_of_mass_destruction:gauntlet",
    "dungeonnowloading:fairkeeper_boros",
    "goety:vizier",
    "alexscaves:luxtructosaurus",
    "minecraft:wither",
  ]
  const chap_4 = [
    "minecraft:ender_dragon",
    "bosses_of_mass_destruction:obsidilith",
    "mofus_better_end_:endermite_queen",
    "mofus_better_end_:eye_guardian",
    "mofus_better_end_:forgotten_litch",
    "alexsmobs:void_worm",
    "soulsweapons:chaos_monarch",
    "cataclysm:ender_guardian",
  ]
  const chap_5 = [
    "cataclysm:the_harbinger",
    "cataclysm:ancient_remnant",
    "soulsweapons:moonknight",
    "goety:apostle",
    "soulsweapons:day_stalker",
  ]
  const chap_6 = [
    "cataclysm:maledictus",
    "cataclysm:the_leviathan",
    "cataclysm:scylla",
    "cataclysm:ignis",
    "traveloptics:the_nightwarden",
  ]
  const chap_7 = [
    "macabre:baal",
    "macabre:gomoria",
    "macabre:valamon",
    "macabre:gargamaw",
    "macabre:morphegor",
    "darkdoppelganger:dark_doppelganger",
  ]
  chap_1.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .randomChance(0.2)
      .addLoot("#kubejs:bosses_weapons")
  )
  chap_2.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .randomChance(0.4)
      .addLoot("#kubejs:bosses_weapons")
  )
  chap_3.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .randomChance(0.6)
      .addLoot("#kubejs:bosses_weapons")
  )
  chap_4.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .randomChance(0.8)
      .addLoot("#kubejs:bosses_weapons")
  )
  chap_5.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .addLoot("#kubejs:bosses_weapons")
  )
  chap_6.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .addLoot("#kubejs:bosses_weapons")
  )
  chap_7.forEach((id) =>
    event
      .addEntityLootModifier(`${id}`)
      .killedByPlayer()
      .addLoot("#kubejs:bosses_weapons")
  )
})
