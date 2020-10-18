<template>
  <div class="men">
    <ul>
      <li><router-link to="/home"><h1>首页</h1></router-link></li>
      <li><router-link to="/goodsList"><h1>商品列表</h1></router-link></li>
      <li><router-link to="/goodsDetails"><h1>商品详情</h1></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
 
};
</script>
<style type="sass">
.men{
  margin-top: 20px;
  text-align: center;
  ul>li {
     margin-bottom: 10px;
  }
}
</style>