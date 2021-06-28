export default {
  SET_JOKES_DATA(state, payload) {
    state.jokes = payload;
  },
  SET_SEARCH_PARAMS(state, payload) {
    state.search = payload;
  },
};
