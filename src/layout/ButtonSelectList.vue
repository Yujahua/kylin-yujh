<template>
  <div class="buttonSelectList">
      <ul>
        <li v-for="(cat,index) in categories" :key=index>
            <ButtonSelect :options=cat.list></ButtonSelect>
        </li>
      </ul>
  </div>
</template>

<script>
import ButtonSelect from './ButtonSelect.vue'

export default {
    name: 'ButtonSelectList',
    components: {
        ButtonSelect
    },
    props: {
        categories: Array|String,
    }
}
</script>

<style type="sass">
.buttonSelectList {
    margin-left: 12px;

    ul{
        overflow: hidden;
        white-space: nowrap;
        li {
            display: inline-block;
            margin-right: 8px;
        }
    }
}
</style>