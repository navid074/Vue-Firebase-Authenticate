<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button v-if="$store.state.user" @click="$store.dispatch('signOut')">Sign Out</button>
  </nav>
  <router-view/>
</template>

<script>
import { useStore } from "vuex"
import { onBeforeMount } from "vue"
export default({
  setup() {
    const store = useStore()
    onBeforeMount(()=>{
      console.log("Before Mount Started");
      store.dispatch('fetchUser')
    })
  
  },
})
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
