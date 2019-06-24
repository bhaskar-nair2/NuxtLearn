import EventService from '~/services/EventService';

export const state = () => ({
  events: [],
  event: {}
});

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  }
};

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((resp) => {
      commit('SET_EVENTS', resp.data);
    });
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((resp) => {
      commit('SET_EVENT', resp.data);
    });
  }
};
