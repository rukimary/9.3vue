<template>
  <div class="v-catalogue__wrapper">
    <nav class="v-catalogue__navbar">
      <h1 class="v-catalogue__heading">Catalogue</h1>
      <router-link class="v-catalogue__cart" :to="{ name: 'cart' }"
        ><img class="v-catalogue__cart_img" :src="cart_img" alt="cart" />
        <p class="v-catalogue__cart_quantity">
          {{
            CART.reduce((accumulator, product) => {
              return accumulator + product.quantity;
            }, 0)
          }}
        </p>
      </router-link>
    </nav>

    <div class="v-catalogue">
      <vCatalogueItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogueItem from "./v-catalogue-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalogue",
  data() {
    return {
      cart_img: require("../icons/cart_img.svg"),
    };
  },
  components: { vCatalogueItem },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.v-catalogue {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 400px);
  gap: 30px;
  justify-content: center;
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    @media screen and (max-width: 960px) {
      justify-content: center;
      gap: 350px;
    }
    @media screen and (max-width: 640px) {
      justify-content: center;
      gap: 40px;
    }
  }
  &__heading {
    color: #c800c8;
    padding-left: 10px;
    font-size: 30px;
    font-family: "Furore", sans-serif;
    letter-spacing: 2px;
  }
  &__cart {
    position: relative;
    justify-items: end;
    text-decoration: none;
    color: white;
    &_quantity {
      position: absolute;
      top: 0;
      right: -8px;
      background-color: #c800c8;
      border-radius: 50%;
      min-width: 18px;
      text-align: center;
    }
    &_img {
      &:active {
        transform: scale(0.95);
      }
    }
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 300px;
  }
}
</style>
