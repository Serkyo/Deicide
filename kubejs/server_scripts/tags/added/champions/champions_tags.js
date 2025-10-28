ServerEvents.tags("entity_type", event => {
  const allowedChampions = [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "born_in_chaos_v1:door_knight"
  ];
  allowedChampions.forEach(id => {
    event.add("champions:allow_champions", `${id}`);
  });
});
