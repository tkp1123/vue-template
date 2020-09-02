import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    currentMenu: null,
    tabsList: [
        {
          id: 12,
          autoName: '首页',
          path: 'welcome',
          icon: 'iconfont iconsanguohome',
        }
    ]
}

const mutations = {

}

export default new Vuex.Store({
    state,mutations
})