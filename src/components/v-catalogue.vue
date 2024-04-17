<template>
  <div class="v-catalogue">
    <vCatalogueItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @childCatalogue="showArticleFromChild"
    />
  </div>
</template>

<script>
import vCatalogueItem from "./v-catalogue-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalogue",
  components: { vCatalogueItem },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    showArticleFromChild(data) {
      console.log(data);
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
