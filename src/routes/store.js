import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state() {
        return {
            account: {
                id: 0,
                token: sessionStorage.getItem('accTkn') || '',
            },
            
        }
    },
    mutations: {
        setAccount(state, payload) {
            state.account.id = payload;
        }
    }
})

export default store;