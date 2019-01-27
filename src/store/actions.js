import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

export default {
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