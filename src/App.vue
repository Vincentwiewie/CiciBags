<template>
  <AppNavbar />
  <router-view />
  <AppFooter />
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
