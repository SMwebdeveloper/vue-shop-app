<template lang="">
  <div class="wrapper-content wrapper-content--fixed home">
    <section>
      <div class="container">
        <h2 class="title">Shop page</h2>
        <div class="item-wrapper">
          <shopItem v-for="product in shopList" ::key="product.id" :product="product"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import shopItem from '@/components/ShopItem.vue';
export default {
  components:{shopItem},
    data (){
      return {
        shopList: null,
      }
    },
    mounted () {
      this.shopList = this.$store.getters.getShopList
    }
};
</script>
<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
input {
  width: 500px;
  height: 50px;
  margin-bottom: 20px;
  outline: none;
  border-radius: 30px;
  padding: 0 20px;
  background: #f5f5f5;
}
button {
  padding: 5px 15px;
  font-size: 17px;
  border-radius: 30px;
  outline: none;
  border: none;
  background: rgb(53, 112, 190);
  color: #fff;
}
</style>
