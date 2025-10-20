ServerEvents.recipes(event => {
  // quark furnaces
  // blackstone furnace -> blast furnace
  event.shaped(
    Item.of("sophisticatedbackpacks:backpack", 1),
    [
      "DLD",
      "SCS", //
      "LLL",
    ],
    {
      C: "#forge:chests/wooden",
      D: "deicideadditions:leather_strap",
      L: "#forge:leather",
      S: "#forge:string",
    }
  );
});
