const state = {
    navList: window.localStorage.getItem('navList'),
    token: window.localStorage.getItem('token'),
    user: window.localStorage.getItem('user'),
    role_id: window.localStorage.getItem('role_id')
}
const mutations = {
    SET_NAVLIST: (state, data) => {
        state.navList = data
        window.localStorage.setItem('navList', data)
    },
    SET_TOKEN: (state, data) => {
        state.token = data
        window.localStorage.setItem('token', data)
    },
    SET_USER_DATA: (state, data) => {
        state.user = data
        window.localStorage.setItem('user', data)
    },
    SET_ROLE_ID: (state, data) => {
        state.role_id = data
        window.localStorage.setItem('role_id', data)
    },
    RESET_NAVLIST: (state, data) => {
        state.navList = ''
        window.localStorage.setItem('navList', '')
    },
    RESET_USER_DATA: (state) => {

    },
    RESET_TOKEN_DATA: (state) => {
        state.token = ''
        window.localStorage.setItem('token', '')
    },
    RESET_ROLE_ID: (state) => {
        state.role_id = ''
        window.localStorage.setItem('role_id', '')
    },
}
export default {
    namespaced: true,
    state,
    mutations
}