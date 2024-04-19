<template>
  <vMainWrapperVue />
</template>

<script>
import vMainWrapperVue from "./components/v-main-wrapper.vue";
export default {
  name: "app",
  components: { vMainWrapperVue },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Furore";
  src: url("./fonts/furore-webfont.woff") format("woff");
}
@font-face {
  font-family: "Montserrat";
  src: url("./fonts/montserrat-regular-webfont.woff") format("woff");
}
*,
*::before,
*::after {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background: #0a0019;
}
</style>
