<template>
  <div class="goods-more">
      <Title :title=title></Title>
      <ul>
        <li v-for="item in list" :key="item.id" @click="toItem">
            <img class="image" :src=item.imgsrc />
            <div class="goods-content">
                <div class="title">{{item.title}}</div>
                <Tag v-for="(p, index) in item.praises" :key="p" :text="p" :color="index%2===0?'red':'blue'"></Tag>
                <span class="amount">￥{{item.price}}</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import {Tag, Title} from '../../layout'
export default {
    name: 'GoodsMore',
    components: {
        Tag,
        Title
    },
    props: {
        list: Array|String,
    },
    data() {
        return {
            title: `更多热卖`,
        }
    },
    methods: {
        toItem: () => {
            console.log(`triggle item click`)
        }
    }
}
</script>

<style type="sass">
.goods-more {
    ul{
        background-color: #fff;
        padding: 12px 0px 0px 12px;
        li {
            display: inline-block;
            width: 169px;
            margin-right: 12px;
            margin-bottom: 8px;
            .image{
                width: 169px;
                height: 150px;
                border-radius: 6px;
            }
            .goods-content {
                margin: 0 8px;
                .title {
                    margin: 0 3px;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.85);
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .amount{
                    color: #E02500;
                    font-size: 16px;
                }
            }
     }
    }
}
</style>