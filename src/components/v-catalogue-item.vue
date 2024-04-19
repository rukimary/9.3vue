<template>
  <div class="v-catalogue-item">
    <p class="v-catalogue-item__name">{{ product_data.name }}</p>

    <p class="v-catalogue-item__about">{{ product_data.about }}</p>
    <p class="v-catalogue-item__price">Price: {{ product_data.price }}</p>
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
  display: grid;
  grid-template-columns: auto 260px auto;
  grid-template-rows: auto repeat(3, 44px) repeat(2, 22px) 107px 39px auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  text-align: center;
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
    justify-self: center;
    grid-row: 7 / 8;
    grid-column: 2 / 3;
  }
  &__add_button {
    background: linear-gradient(90deg, #c800c8 0%, #9600ff 100%, #9600ff 100%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #dcdcf0;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    grid-row: 8 / 9;
    grid-column: -2 / -3;
    &:active {
      transform: scale(0.95);
    }
  }
  &__name {
    font-family: "Furore", sans-serif;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 20px;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  &__price {
    font-weight: bold;
    font-size: 18px;
    grid-row: 5 / 6;
    grid-column: 2 / 3;
  }
  &__about {
    font-size: 14px;
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    align-self: end;
  }
}
</style>
