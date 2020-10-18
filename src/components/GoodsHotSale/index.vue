<template>
  <div class="goodsHotSale">
      <GoodsHotSaleTitle :title=title :secondTitle=secondTitle></GoodsHotSaleTitle>
       <div class="scrollbox">
           <ul>
                <li v-for="item in list" :key="item.id" @click="toItem">
                <img class="image" :src=item.imgsrc />
                <div class="desc">{{item.title}}</div>
                <div class="sellprice">
                    ￥{{item.price}}<span class="originprice">￥{{item.originprice}}</span>
                </div>
                <div class="praise">
                    <img class="good" src="../../assets/给个好评.png" />好评{{item.goodPraiseNum}}
                </div>
                </li>
            </ul>
       </div>
       <CarouselPoint :len=len></CarouselPoint>
  </div>
</template>

<script>
import GoodsHotSaleTitle from './GoodsHotSaleTitle.vue'
import {CarouselPoint} from '../../layout'
export default {
    name: 'GoodsHotSale',
    components: {
        GoodsHotSaleTitle,
        CarouselPoint
    },
    props: {
        list: Array|String,
        title: String,
        secondTitle: String
    },
    data() {
        return {
        }
    },
    computed: {
        
        len: function() {
            console.log(`${this.list.length}`)
            return this.list.length ? Math.round(this.list.length/4) : 1
        }
    },
    methods: {
        toItem : () => {
            console.log(`triggle item click`)
        }
    }

}
</script>

<style type="sass">
.goodsHotSale{
    width: 100%;
    background-color: #fff;
    padding:20px 0 20px 0;
    clear: both;
    .scrollbox{
        width: 100%;
        overflow: auto;
        font-size: 12px;
        padding-left: 12px;
        ul{
            white-space: nowrap;
            li{
                display: inline-block;
                margin-right: -8px;
                text-align: center;
                .image {
                    width: 90px;
                    height: 100px;
                    background-size: 100% 100%;
                    border-radius: 4px;
                    margin-right: 12px;
                    margin-bottom: 8px;
                }
                .desc {
                    width: 90px;
                    color: #333;
                    text-overflow:ellipsis;
                    overflow: hidden;
                }
                .sellprice{
                    color: #D92B2B;
                    font-size: 16px;
                    .originprice {
                        color: #bbb;
                        font-size: 12px;
                        text-decoretion: line-through;
                        margin-left: 4px;
                    }
                }
                .praise {
                    margin:0 16px;
                    background-color: rgba(255,170,0,0.1);
                    border-radius: 3px;
                    color: #FFAA00;
                    font-size: 10px;
                    transform: scale(0.83);
                    .good{
                        width: 11px;
                        height: 11px;
                    }
                }
            }
        }
        ::scrollbar{
            height:0;
            width:0;
        }
    }
}
</style>