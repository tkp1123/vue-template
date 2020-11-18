const state = {
    navList: window.sessionStorage.getItem('navList'),
    token: window.sessionStorage.getItem('token'),
    user: window.sessionStorage.getItem('user')
}
const mutations = {
    SET_NAVLIST: (state, data) => {
        state.navList = data
        window.sessionStorage.setItem('navList', data)
    },
    SET_TOKEN: (state, data) => {
        state.token = data
        window.sessionStorage.setItem('token', data)
    },
    SET_USER_DATA: (state, data) => {
        state.user = data
        window.sessionStorage.setItem('user', data)
    },
    RESET_NAVLIST: (state, data) => {
        state.navList = ''
        window.sessionStorage.setItem('navList', '')
    },
    RESET_USER_DATA: (state) => {

    },
    RESET_TOKEN_DATA: (state) => {
        state.token = ''
        window.sessionStorage.setItem('token', '')
    }
}
export default {
    namespaced: true,
    state,
    mutations
}