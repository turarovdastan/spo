export default function(instance) {
  return {
    getEvents() {
      return instance.get("events");
    },
    storeEvent(payload) {
      return instance.post("events", payload);
    },
    deleteEvent(payload) {
      return instance.delete("events", payload);
    }
  };
}
