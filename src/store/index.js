import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
    },
    getters: {
        asks(state) {
            return state.asks
        }
    },
    mutations: {
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_ASKS(state, asks){
            state.asks = asks
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data)
                    context.commit('SET_NEWS', response.data)
                })
                .catch(response => {
                    console.log(response)
                })
        },
        FETCH_ASKS({ commit }) {
            fetchAskList()
                .then(({ data }) => {
                    commit('SET_ASKS', data)
                })
                .catch(response => {
                    console.log(response)
                })
        },
        FETCH_JOBS(context) {
            fetchJobsList()
                .then(response => {
                    console.log(response.data)
                    context.commit('SET_JOBS', response.data)
                })
                .catch(response => {
                    console.log(response)
                })
        }        
    }
})