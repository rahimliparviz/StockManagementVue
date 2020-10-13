import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index"
import Token from '../helpers/Token'
import Notification from '../helpers/Notification'
import agent from '../api/agent'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token'),
    userType: Token.userType(localStorage.getItem('token')),
    userImage: localStorage.getItem('image') ? process.env.VUE_APP_API_URL + localStorage.getItem('image') : process.env.VUE_APP_CLIENT_URL + '/img/user.png',
  },
  getters: {
    username: state => {
      return state.username
    },
    userType: state => {
      return state.userType
    },
    userImage: state => {
      return state.userImage
    },
    token: state => {
      return state.token
    },
    isAuthenticated: state => {
      return !!state.token;
    }

  },
  mutations: {

    //Auth
    login: (state, payload) => {

      console.log(payload)
      if (Token.isValid(payload.res.token)) {
        state.token = payload.res.token
        localStorage.setItem('token', payload.res.token)
        state.username = payload.res.username;
        localStorage.setItem('username', payload.res.username)
        state.userImage = payload.res.image
        localStorage.setItem('image', payload.res.image)


        // router.push('/home')
        router.push({ name: "Home" })
        Notification.success('Signed in successfully!')

      } else {
        Notification.error('Token is invalid!')
      }

    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      router.push("/login")
      Notification.success('Logout successfully!')
    },
    //Auth end

  },
  actions: {
    login: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {

        agent.User.login(payload.form)
          .then(res => {
            commit('login', { res: res });
            resolve();
          }, (error) => reject(error));
      });
    },
  },
  modules: {}
});
