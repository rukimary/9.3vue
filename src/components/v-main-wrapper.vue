<template>
  <div class="v-main-wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  data() {
    return {
      title: "hello from v-main-wrapper!",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 960px;
  margin: 0 auto;
}
</style>
