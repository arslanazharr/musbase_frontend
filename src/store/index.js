import Vuex from "vuex";
import axios from "axios";
import { useToast } from "vue-toast-notification";

const toast = useToast();

const BASE_URL = process.env.BASE_URL;

export default new Vuex.Store({
  state: {
    events: [],
    registeredEvents: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_EVENTS(state, payload) {
      state.events = payload;
    },
    SET_REGISTERED_EVENTS(state, payload) {
      state.registeredEvents = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await axios.get(`${BASE_URL}/events`);
        commit("SET_EVENTS", response.data);
      } catch (error) {
        commit("SET_ERROR", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchEventsById({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await axios.get(
          `${BASE_URL}/user/Hdpcn96943s/registered-events`
        );
        commit("SET_REGISTERED_EVENTS", response.data);
      } catch (error) {
        commit("SET_ERROR", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async registerEvent({ commit }, body) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const response = await axios.post(`${BASE_URL}/events/register`, body);
        toast.success(response.data.message);
      } catch (error) {
        commit("SET_ERROR", error);

        toast.error(error.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    events: (state) => state.events,
    registeredEvents: (state) => state.registeredEvents,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
});
