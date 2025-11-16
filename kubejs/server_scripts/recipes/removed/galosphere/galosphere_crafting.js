ServerEvents.recipes(event => {
  event.remove({
    id: "galosphere:silver_block",
  }),
  event.remove({
    id: "galosphere:silver_upgrade_smithing_template",
  }),
  event.remove({
    id: "galosphere:silver_balance",
  }),
  event.remove({
    id: "galosphere:silver_lattice",
  }),
  event.remove({
    id: "galosphere:pink_salt_lamp",
  }),
  event.remove({
    id: "galosphere:barometer",
  }),
  event.remove({
    id: "galosphere:shadow_frame",
  });
});
