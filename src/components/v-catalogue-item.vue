<template>
  <div class="v-catalogue-item">
    <p class="v-catalogue-item__name">{{ product_data.name }}</p>

    <p class="v-catalogue-item__about">{{ product_data.about }}</p>
    <p class="v-catalogue-item__price">{{ product_data.price }}</p>
    <img
      class="v-catalogue-item__img"
      :src="require('../assets/images/' + product_data.image)"
      alt="Image of {{ product_data.name }}"
    />
    <button class="v-catalogue-item__add_button" @click="addToCart">
      add me to cart!
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalogue-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.v-catalogue-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 20px;
  padding: 2em;
  margin: 1em;

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
    margin-top: auto;
  }
  &__add_button {
    background: linear-gradient(90deg, #c800c8 0%, #9600ff 100%, #9600ff 100%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #dcdcf0;
    cursor: pointer;
    padding: 12px 24px;
    text-align: center;
    font-weight: bold;
  }
  &__name {
    font-weight: bold;
  }
}
</style>
