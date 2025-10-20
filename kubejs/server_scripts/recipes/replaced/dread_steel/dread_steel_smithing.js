ServerEvents.recipes(event => {
  //DreadSteel armor
  //DreadSteel helmet
  event.smithing(
    "dreadsteel:dreadsteel_helmet",
    "deicideadditions:dreadsteel_smithing_template",
    "#deicideadditions:dragonsteel_helmet",
    "dreadsteel:dreadsteel_ingot"
  );
  //DreadSteel chestplate
  event.smithing(
    "dreadsteel:dreadsteel_chestplate",
    "deicideadditions:dreadsteel_smithing_template",
    "#deicideadditions:dragonsteel_chestplate",
    "dreadsteel:dreadsteel_ingot"
  );
  //DreadSteel leggings
  event.smithing(
    "dreadsteel:dreadsteel_leggings",
    "deicideadditions:dreadsteel_smithing_template",
    "#deicideadditions:dragonsteel_leggings",
    "dreadsteel:dreadsteel_ingot"
  );
  //DreadSteel boots
  event.smithing(
    "dreadsteel:dreadsteel_boots", // arg 1: output
    "deicideadditions:dreadsteel_smithing_template", // arg 2: the smithing template
    "#deicideadditions:dragonsteel_boots", // arg 3: the item to be upgraded
    "dreadsteel:dreadsteel_ingot" // arg 4: the upgrade item
  );
});
