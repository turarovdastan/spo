export default function(instance) {
  return {
    getRooms() {
      return instance.get("rooms");
    },
    storeRooms(payload) {
      return instance.post("rooms", payload);
    }
  };
}
