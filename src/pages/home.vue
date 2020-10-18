<template>
  <div class="homepage">
      <TitleBar>
          <ButtonSearch placeholder="热门商品点击查看优惠折扣..."></ButtonSearch>
          <CategorySwitch :categories=categories></CategorySwitch>
      </TitleBar>
      <GoodsNormalSale :list=list></GoodsNormalSale>
      <GoodsHotSale :title=title :secondTitle=secondTitle :list=hotList></GoodsHotSale>
      <GoodsMore :list=adviseList></GoodsMore>
  </div>
</template>

<script>
import {TitleBar, ButtonSearch} from '../layout'
import {CategorySwitch, GoodsNormalSale, GoodsHotSale, GoodsMore} from '../components'

export default {
    name: 'home',
    components: {
        TitleBar,
        ButtonSearch,
        CategorySwitch,
        GoodsNormalSale,
        GoodsHotSale,
        GoodsMore
    },
    data() {
        return {
            categories: [],
            list: [],   // 主页普通商品列表
            hotList: [], // 人气爆款列表
            adviseList: [], //更多热卖
            title: `人气爆款`,
            secondTitle: `大家都在卖的热销好货`

        }
    },
    mounted() {
        const _this = this;

        this.$axios
            .get('http://localhost:3000/getCategories',{})
            .then(res => {
                 _this.categories = res.data.resultData
            })
            .catch(err => {})

        this.$axios
            .get('http://localhost:3000/getCategoryGoods',{})
            .then(res => {
                 _this.list = res.data.resultData
            })
            .catch(err => {})

        this.$axios
            .get('http://localhost:3000/getCategoryHotGoods',{})
            .then(res => {
                 _this.hotList = res.data.resultData
            })
            .catch(err => {})

        this.$axios
            .get('http://localhost:3000/getCategoryMoreHotGoods',{})
            .then(res => {
                 _this.adviseList = res.data.resultData
            })
            .catch(err => {})
    }
}
</script>

<style type="sass">
.homepage{
    font-family: PingFangSC-Regular;
    background-color: #f7f7f7;
    .clear {
         clear: both;
    }
}
</style>