<template>
  <div class="v-catalogue">
    <vCatalogueItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import vCatalogueItem from "./v-catalogue-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalogue",
  components: { vCatalogueItem },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Карточки подтянулись!");
      }
    });
  },
};
</script>

<style>
.v-catalogue {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
</style>
