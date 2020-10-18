<template>
  <div class="buttonSelect">
      <div class="viewSelected">{{translatedSelected}} <img v-if="options.length > 1" /></div>
      <ul>
          <li v-for="(opt,index) in options" :key=index @click="choose(index)">
              {{opt}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ButtonSelect',
    props: {
        options: Array|String
    },
    data() {
        return {
            optionSelected: 0
        }
    },
    mounted() {
        console.log(`${this.options.length}`)
    },
    computed: {
        translatedSelected: function() {
            return this.options[this.optionSelected]
        } 
    },
    methods: {
        choose: function(index) {
            return this.optionSelected = index;
        }
    }
}
</script>

<style type="sass">
.buttonSelect {
    .viewSelected {
        padding: 6px 16px;
        margin-bottom: 8px;
        font-size: 12px;
        border-radius: 14px;
        background-color: rgba(0,0,0,0.03);
        color: #666;
        img {
            width: 8px;
            height: 12px;
            border: 0px;
            margin-left: 2px;
            outline: none;
            transform: rotate(90deg);
            background: #CCC;
            background: url('../assets/小箭头.png') no-repeat;
        }
    }
    ul {
        display: none;
    }
}
</style>