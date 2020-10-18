<template>
  <div class="categoryFilter">
      <ul>
        <li v-for="(cat,index) in categories" :key="cat.id" @click="triggerCategory(index)" :class="{'active':active===index}">
            {{cat.title?cat.title:cat}}
        </li>
        <li class="viewOrder"></li>
        <li class="viewFilter">
            <span>筛选</span> <img/>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CategoryFilter',
    props: {
        categories: Array|String
    },
    data() {
        return {
            active: 0,
        }
    },
    mounted() {
        console.log(`${this.categories}`)
    },
    methods: {
        triggerCategory: function(index) {
            console.log(`triggle category click`)
            return this.active = index;
        }
    }
}
</script>

<style type="sass">
.categoryFilter {
    margin-top: 16px;
    margin-bottom: 18px;
    text-align: center;
    ul {
        display: inline-block;
        li {
            height: 20px;
            line-height: 20px;;
            font-size: 14px;
            color: #999;
            float: left;
            margin: auto 10px;
            cursor: pointer;

            .category-menu {

            }
        }
        li.viewOrder {
            width: 20px;
            height: 20px;
            background: url('../../assets/排列.png') no-repeat;
        }
        li.viewFilter {
            font-size: 14px;
            color: #0D803D;

            img{
                width: 12px;
                height: 10px;
                border: 0px;
                outline: none;
                background: url('../../assets/筛选.png') no-repeat;
            }
        }
    }
    ul> li.active {
            color: #0D803D;
            opacity: 1;
        }
}
</style>