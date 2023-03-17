<template lang="">
    <div class="item">
        <img :src="product.img" :alt="product.title">
        <router-link :to="/shop/ + product.id"class="link">{{product.title}}</router-link>
    </div>
</template>
<script>
export default {
  props:{
    product:{
        type:Object,
        required:true
    }
  }
}
</script>
<style lang="css">
.item-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 10px;
}
.item{
    width: 48%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: flex-start;
}
.item img{
    object-fit: cover;
    width: 500px;
    height: 350px;
}
.link{
  cursor:pointer;
  border-bottom:1px solid #4343aa;
  color: #4343aa;
  text-decoration: none;
}
</style>