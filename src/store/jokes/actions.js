import axios from '../../plugins/axios';

export default {
  // eslint-disable-next-line
  async fetchJokes({ commit }) {
    try {
      const jokes = await axios.get('/jokes/search?query=all');
      if (jokes) {
        commit('SET_JOKES_DATA', jokes.data);
        return Promise.resolve(jokes.data);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
