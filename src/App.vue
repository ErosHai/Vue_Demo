<template>
  <div id="app">
    <!--    <img src="./assets/logo.png" alt="vue">-->
    <router-link to="/home" tag='button' replace >home</router-link>
    <router-link to="/user" tag='button' replace>user</router-link>
    <router-link to="/HelloWorld" tag="button" replace>hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li{
  list-style: none;
}
a {
  text-decoration: #42b1fe;
}
.active{
  color: #ff0000;
}
</style>
