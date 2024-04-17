>
<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="Cart icon"
    />
    <div>
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
      <p>{{ cart_item_data.about }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity</p>
      <span>
        {{ cart_item_data.quantity }}
      </span>
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
  watch: {},
  mounted() {
    console.log("You added an item!");
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: auto 40px 10px;

  border-radius: 20px;
  padding: 0 2em;
  margin: 0 8em;
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
  &__image {
    min-width: 100%;
  }
  &__delete_button {
    background: linear-gradient(90deg, #9600ff 0%, #c800c8 100%, #c800c8 100%);
    border-radius: 8px;
    border-style: none;
    color: #dcdcf0;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
  }
}
</style>
