<template>
  <div class="list">
      <TitleBar>
          <ButtonSearch :placeholder=placeholder :width=width :height=height>
              <Back :to="homepage"></Back>
          </ButtonSearch>
          <CategorySwitch :categories=categories></CategorySwitch>
      </TitleBar>
      <CategoryFilter :categories=categoriesFilter></CategoryFilter>
      <ButtonSelectList :categories=filtersList></ButtonSelectList>
  </div>
</template>

<script>
import {CategorySwitch, CategoryFilter} from '../../components'
import {TitleBar, ButtonSearch, Back, ButtonSelectList} from '../../layout'
export default {
    name: 'goodsList',
    components: {
        CategorySwitch,
        CategoryFilter,
        TitleBar,
        ButtonSearch,
        Back,
        ButtonSelectList
    },
    props: {
        list: Array|String
    },
    data() {
        return {
            placeholder: `您想要搜索点什么`,
            categories: ['全部', '店铺'],
            categoriesFilter: ['综合', '销量', '价格'],
            filtersList: [],
            width: `311px`,
            height: `32px`
        }
    },
    mounted() {
        const _this = this;

        this.$axios
            .get('http://localhost:3000/getCategoryFilters',{})
            .then(res => {
                 _this.filtersList = res.data.resultData
            })
            .catch(err => {})

        
    },
    methods: {
        homepage: function() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>