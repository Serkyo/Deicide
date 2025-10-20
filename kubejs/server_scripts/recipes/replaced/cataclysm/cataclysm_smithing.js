ServerEvents.recipes(event => {
  //cursium armor
  //cursium helmet
  event.smithing(
    "cataclysm:cursium_helmet",
    "cataclysm:cursium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_helmet",
    "cataclysm:cursium_ingot"
  );
  //cursium chestplate
  event.smithing(
    "cataclysm:cursium_chestplate",
    "cataclysm:cursium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_chestplate",
    "cataclysm:cursium_ingot"
  );
  //cursium leggings
  event.smithing(
    "cataclysm:cursium_leggings",
    "cataclysm:cursium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_leggings",
    "cataclysm:cursium_ingot"
  );
  //cursium boots
  event.smithing(
    "cataclysm:cursium_boots", // arg 1: output
    "cataclysm:cursium_upgrade_smithing_template", // arg 2: the smithing template
    "dreadsteel:dreadsteel_boots", // arg 3: the item to be upgraded
    "cataclysm:cursium_ingot" // arg 4: the upgrade item
  );
  //ignitium armor
  //ignitium helmet
  event.smithing(
    "cataclysm:ignitium_helmet",
    "cataclysm:ignitium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_helmet",
    "cataclysm:ignitium_ingot"
  );
  //ignitium chestplate
  event.smithing(
    "cataclysm:ignitium_chestplate",
    "cataclysm:ignitium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_chestplate",
    "cataclysm:ignitium_ingot"
  );
  //ignitium leggings
  event.smithing(
    "cataclysm:ignitium_leggings",
    "cataclysm:ignitium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_leggings",
    "cataclysm:ignitium_ingot"
  );
  //ignitium boots
  event.smithing(
    "cataclysm:ignitium_boots",
    "cataclysm:ignitium_upgrade_smithing_template",
    "dreadsteel:dreadsteel_boots",
    "cataclysm:ignitium_ingot"
  );
});
