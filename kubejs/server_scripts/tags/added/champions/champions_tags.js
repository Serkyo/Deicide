ServerEvents.tags("entity_type", event => {
  const allowedChampions = [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "goety:envioker"
  ];
  allowedChampions.forEach(id => {
    event.add("champions:allow_champions", `${id}`);
  });
});
