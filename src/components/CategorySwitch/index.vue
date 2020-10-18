<template>
  <div class="category">
      <ul>
        <li v-for="(cat,index) in categories" :key="cat.id" @click="toCategory(index)" :class="{'active':active===index}">
            {{cat.title?cat.title:cat}}
        </li>
        <li class="category-menu"></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CategorySwitch',
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
        toCategory: function(index) {
            console.log(`triggle category click`)
            return this.active = index;
        }
    }
}
</script>

<style type="sass">
.category {
    margin-top: 20px;
    text-align: center;
    ul {
        display: inline-block;
        li {
            font-size: 14px;
            color: #fff;
            opacity: 0.7;
            float: left;
            margin: auto 10px;
            cursor: pointer;

            .category-menu {

            }
        }
    }
    ul> li.active {
            font-weight: bold;
            font-size: 16px;
            opacity: 1;
        }
}
</style>