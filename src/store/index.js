import Vue from 'vue';
import Vuex from 'vuex';
import AppStore from './modules/AppStore';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AppStore,
    }
});
