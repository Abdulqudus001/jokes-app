import Vue from 'vue';
import Vuex from 'vuex';
import jokes from './jokes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jokes,
  },
});
