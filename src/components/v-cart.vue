<template>
  <div class="v-cart">
    <nav class="v-cart__navbar">
      <router-link :to="{ name: 'catalogue' }">
        <button class="v-cart__back_button">Back</button>
      </router-link>
      <h2 class="v-cart__navbar_heading">Cart</h2>
    </nav>
    <p class="v-cart__state" v-if="!CART.length">
      There are no items in your cart
    </p>
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
  computed: {
    CART() {
      return this.$store.getters.CART;
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.v-cart {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 920px;
  gap: 20px;
  justify-content: center;
  color: #c800c8;
  font-size: 20px;
  margin-bottom: 40px;
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding-top: 20px;
    @media screen and (max-width: 960px) {
      justify-content: center;
      gap: 350px;
    }
    @media screen and (max-width: 640px) {
      justify-content: center;
      gap: 40px;
    }
    &_heading {
      font-family: "Furore", sans-serif;
      letter-spacing: 2px;
    }
  }

  &__state {
    text-align: center;
  }
  &__back_button {
    align-items: center;
    border-radius: 5px;
    border-style: none;
    background-color: aqua;
    color: rgb(41, 58, 17);
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    padding: 8px 25px;
    justify-content: center;
    outline: none;
    text-align: center;
    text-decoration: none;
    &:active {
      transform: scale(0.95);
    }
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 620px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 300px;
  }
}
</style>
