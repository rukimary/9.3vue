>
<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="Cart icon"
    />
    <p class="v-cart-item__name">{{ cart_item_data.name }}</p>
    <p class="v-cart-item__article">{{ cart_item_data.article }}</p>
    <p class="v-cart-item__about">{{ cart_item_data.about }}</p>
    <div class="v-cart-item__quantity">
      Quantity: {{ cart_item_data.quantity }}
    </div>
    <div class="v-cart-item__total_price">
      Price: {{ cart_item_data.price * cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart" class="v-cart-item__delete_button">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {
    console.log("You added an item!");
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: grid;
  grid-template-columns: 10px 180px 120px 300px 300px 10px;
  grid-template-rows: 30px repeat(3, 50px) 30px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  border-radius: 20px;
  box-shadow: 0 0 25px 0 #4c0955;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#5e306d),
    to(#3c1c46)
  );
  background: linear-gradient(180deg, #5e306d, #3c1c46);
  color: #dcdcf0;
  &__img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
    grid-row: 2 / 5;
    grid-column: 2 / 3;
    @media screen and (max-width: 620px) {
      display: none;
    }
  }
  &__delete_button {
    background: linear-gradient(90deg, #9600ff 0%, #c800c8 100%, #c800c8 100%);
    border-radius: 8px;
    border-style: none;
    color: #dcdcf0;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    grid-row: 4 / 5;
    grid-column: 5 / 6;
    @media screen and (max-width: 960px) {
      grid-row: 4 / 5;
      grid-column: 3 / 4;
    }
    @media screen and (max-width: 620px) {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  &__name {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
    font-family: "Furore", sans-serif;
    @media screen and (max-width: 620px) {
      grid-row: 2 / 3;
      grid-column: 2 / 5;
      font-size: 18px;
    }
  }
  &__about {
    grid-row: 3 / 4;
    grid-column: 3 / 5;
    @media screen and (max-width: 620px) {
      display: none;
    }
  }
  &__article {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    font-family: "Furore", sans-serif;
    @media screen and (max-width: 620px) {
      grid-row: 4 / 5;
      grid-column: 3 / 4;
      justify-self: center;
    }
  }
  &__total_price {
    grid-row: 3 / 4;
    grid-column: 5 / 6;
    justify-self: center;
    @media screen and (max-width: 960px) {
      grid-row: 4 / 5;
      grid-column: 4 / 5;
    }
    @media screen and (max-width: 620px) {
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      font-size: 15px;
      justify-self: left;
      align-self: center;
    }
  }
  &__quantity {
    grid-row: 2 / 3;
    grid-column: 5 / 6;
    justify-self: center;
    font-family: "Furore", sans-serif;
    @media screen and (max-width: 960px) {
      grid-row: 4 / 5;
      grid-column: 4 / 5;
      align-self: end;
    }
    @media screen and (max-width: 620px) {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      font-size: 15px;
      justify-self: left;
      align-self: end;
    }
  }
}
</style>
