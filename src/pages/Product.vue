<template lang="">
  <div class="wrapper-content wrapper-content--fixed home">
    <section>
      <div class="container">
        <div class="product-wrapper">
          <!-- product slider -->
          <div class="product-slider">
            <carousel perPage="1" paginationEnable="true" paginationColor="#b3b3b3" paginationActiveColor="#494ce8">
              <slide v-for="(slide , index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name"/>
            </slide>
            </carousel>
          </div>

          <!-- product content -->
          <div class="product-content">
            <h2 class="title">{{ product.title }}</h2>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    let routId = this.$route.params.id;
    let id = +routId;
    this.product = this.$store.getters.getProduct(id);
    console.log(product);
  },
};
</script>

<style lang="css">
.product-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-slider,
.product-content {
  max-width: 48%;
  text-align: center;
}
.product-slider img {
  width: 500px;
  height: auto;
}
</style>
