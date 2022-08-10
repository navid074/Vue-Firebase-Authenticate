<template>
  <section class="forms">
    <form action="login" class="sign-in" @submit.prevent="login">
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email Address"
        v-model="login_form.email"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        v-model="login_form.password"
      />
      <br />
      <input type="submit" value="Sign In" />
    </form>

    <form action="signup" class="sign-up" @submit.prevent="signup">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email Address"
        v-model="signup_form.email"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        v-model="signup_form.password"
      />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});
    const signup_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch("signIn", login_form.value);
    };

    const signup = () => {
      store.dispatch("signUp", signup_form.value);
    };

    return { login_form, signup_form, store, login, signup };
  },
};
</script>

<style>
.forms {
  display: flex;
  min-height: 10vh;
}
form {
  flex: 1 1 0%;
  padding: 8rem;
}
form.sign-up {
  color: #fff;
  background-color: crimson;
  background-image: linear-gradient(to bottom right, crimson);
}
h2{
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
}
input{
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}
input:not([type="submit"]){
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]){
    opacity: 1;

}
input::placeholder{
    color: inherit;
}
form.sign-up input:not([type="submit"]){
    color: #fff;
    border-bottom: 2px solid #fff;
}
input::placeholder{
    color: inherit;
}
form.sign-in input:not([type="submit"]){
    border-bottom: 2px solid grey;
}
form.sign-in input[type="submit"]{
    background-color: crimson;
    color: #fff;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}
form.sign-up input[type="submit"]{
    background-color:#fff;
    color: crimson;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}
</style>
