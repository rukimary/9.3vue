>
<template>
  <div class="v-main-wrapper">
    <vCatalogue />
  </div>
  <div class="v-main-wrapper__cart">
    <vCart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import vCatalogue from "./v-catalogue.vue";
import vCart from "./v-cart.vue";
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  components: { vCatalogue, vCart },
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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  &__cart {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
