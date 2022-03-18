import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const info = new Vuex.Info({
    state:{
        ten: null
    },
    getter: {
        tenResult: state => {
            return state.ten;
        }
    }
});


