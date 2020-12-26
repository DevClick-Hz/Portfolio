<template>
  <div id="app" data-spy="scroll" data-offset="50">
    <navbar></navbar>
    <mobNav></mobNav>
    <top></top>
    <mainCont></mainCont>
    <contactMe></contactMe>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import top from "./views/top";
import mainCont from "./views/mainCont";
import contactMe from "./views/contactMe";
import mobNav from "./components/mobNav";
export default {
  components: { navbar, top, mainCont, contactMe, mobNav }
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth !important;
}
#app {
  font-family: "Anton", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
