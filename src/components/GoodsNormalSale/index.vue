<template>
  <div class="goodsNormalSale">
      <ul>
        <li v-for="item in list" :key="item.title" @click="toItem">
            <img :src=item.imgsrc />
            <span>{{item.title}}</span>
        </li>
        <div class="clear"></div>
        </ul>
  </div>
</template>

<script>
export default {
    name: 'GoodsNormalSale',
    props: {
        list: Array|String
    },
    methods: {
        toItem: () => {
            console.log(`triggle item click`)
        }
    }

}
</script>

<style>
.goodsNormalSale {
    width: 100%;
    padding: 20px 12px 0;
    margin-bottom: 12px;
    background-color: #fff;
    ul,li {display: inline-block;}
    ul>li {
        width: 70px;
        margin-bottom: 16px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        float: left;
    
        img{
            width: 50px;
            height: 50px;
            margin-bottom: 8px;
        }
        span{
            display: inline-block;
        }
    }
}
</style>