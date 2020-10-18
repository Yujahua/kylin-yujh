<template>
  <div class="goodsHotSaleTitle">
      <h1>{{title}}</h1>
      <span>{{secondTitle}}</span>
  </div>
</template>

<script>
export default {
    name: 'GoodsHotSaleTitle',
    props: {
        title: String,
        secondTitle: String
    },
    data() {
        return {
        }
    },

}
</script>

<style type="sass">
.goodsHotSaleTitle{
    margin-bottom: 14px;
    
    h1 {
      font-family: 'MFLangQian_Noncommercial-Bold';
      color: #333;
      font-size: 18px;
      display: inline-block;
      margin-right: 8px;
    }
    span {
        color: #999;
        font-size: 12px;
    }
}
</style>