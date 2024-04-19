<template>
  <div class="error-wrapper">
    <h2>404 page not found!</h2>
    <img :src="error_img" alt="404" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      error_img: require("../icons/error_img.svg"),
    };
  },
};
</script>

<style scoped>
.error-wrapper {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  flex-direction: column;
  align-items: center;
}
</style>
