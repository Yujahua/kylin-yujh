<template>
  <div class="carousePoint">
      <ul>
          <li v-for="(p, index) in len" :key="p" :class="{'active':active===index}" @click="changePage(index)"></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'CarouselPoint',
    props: {
        len: String|Number
    },
    data() {
        return {
            active: 0,
        }
    },
    methods: {
        changePage: function(index) {

            console.log(`triggle item click event`)
            return this.active = index;
        }
    }
}
</script>

<style type="sass">
.carousePoint{
    text-align: center;
    margin-top: 15px;

    ul>li {
        display: inline-block;
        white-space: nowrap;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        margin-right: 6px;
        background-color: #386E54;
        border: 1px solid #386E54;
        opacity: 0.3;
    }
    ul>li.active{
        opacity: 1;
    }
    ul>li:last-child {
            margin-right: 0px;
        }
}
</style>