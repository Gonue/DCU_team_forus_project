import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            account: {
                id: 0,
                token: sessionStorage.getItem('accTkn') || '',
            }
        }
    },
    mutations: {
        setAccount(state, payload) {
            state.account.id = payload;
        }
    }
})

export default store;