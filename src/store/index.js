import Vue from "vue";
import Vuex from "vuex";
import {
  TOGGLE_APP_LAYOUT,
  CHANGE_HEAD_TITLE,
  OPEN_POPUP,
  CLOSE_POPUP
} from "./type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    default: "default",
    appsectionLayout: false,
    titlePage: "",
    activePopup: false,
    lastActivePopup: false
  },
  mutations: {
    [TOGGLE_APP_LAYOUT](state, payload) {
      state.appsectionLayout = payload;
    },
    [CHANGE_HEAD_TITLE](state, payload) {
      state.titlePage = payload;
    },
    [OPEN_POPUP](state, payload) {
      state.lastActivePopup = state.activePopup;
      state.activePopup = payload;
    },
    [CLOSE_POPUP](state, payload) {
      state.activePopup = payload;
    }
  },
  actions: {},
  modules: {}
});
