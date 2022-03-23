export default function(instance) {
  return {
    getHearings() {
      return instance.get("hearings");
    },
    storeHearing(payload) {
      return instance.post("hearings", payload);
    },
    putHearing(payload) {
      return instance.put("hearings", payload);
    },
    deleteHearing(payload) {
      return instance.delete("hearings", payload);
    }
  };
}
