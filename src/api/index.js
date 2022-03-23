import instance from "./instance";

import roomsModule from "./rooms";
import hearingsModule from "./hearings";
import eventsModule from "./events";

export default {
  rooms: roomsModule(instance),
  hearings: hearingsModule(instance),
  events: eventsModule(instance)
};
