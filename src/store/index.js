import { createStore } from "vuex";
import Swal from "sweetalert2";
import router from "@/router";
import { auth } from "@/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async signIn({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            Swal.fire({
              title: "User Not Found !",
              text: "Your Entered Information Was Not found :(",
              timer: 3000,
            });
            break;
          case "auth/wrong-password":
            Swal.fire({
              title: "Wrong Password !",
              text: "Your Entered Information Was Not found :(",
              timer: 3000,
            });
            break;
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async signUp({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            Swal.fire({
              title: "In Use Email !",
              text: "Your Entered Information Was Not found :(",
              timer: 3000,
            });
            break;
          case "auth/invalid-email":
            Swal.fire({
              title: "Invalid Email !",
              text: "Your Entered Information Was Not found :(",
              timer: 3000,
            });
            break;
          case "auth/operation-not-allowed":
            Swal.fire({
              title: "Operation Not Allowed !",
              text: "Your Entered Information Was Not found :(",
              timer: 3000,
            });
            break;
          case "auth/week-password":
            Swal.fire({
              title: "Week Password !",
              text: "You Entered Week Password :(",
              timer: 3000,
            });
            break;
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async signOut({ commit }) {
      await signOut(auth)
        commit('CLEAR_USER')
        router.push('/login')
    },
    fetchUser({commit}){
      auth.onAuthStateChanged(async user => {
        if(user === null){
          commit('CLEAR_USER')
        }else{
          commit('SET_USER' , user)
          if(router.isReady()&& router.currentRoute.value.path === '/login'){
            router.push('/')
          }
        }
      })
    }
  },
  modules: {},
});