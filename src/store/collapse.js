const state = {
    isCollapse: false
}
const mutations = {
    collapse: (state) => {
        state.isCollapse = !state.isCollapse
    }
}
export default {
    state,
    mutations
}
