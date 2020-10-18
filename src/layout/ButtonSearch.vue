<template>
  <div class="title-search-bar">
      <slot/>
      <input class="input-control" :placeholder="placeholder" :style="{'width':width,'height':height}" />
  </div>
</template>

<script>
export default {
    name: 'ButtonSearch',
    props: {
        placeholder: String,
        width: String | '351px',
        height: String | '40px'
    }
}
</script>

<style type="sass">
.title-search-bar {
    display: flex;
    text-align: center;
    .input-control{
        width: 100%;
        height:40px;
        border-radius: 20px;
        background-color: #fff;
        background-image: url('../assets/搜索.png');
        background-repeat: no-repeat;
        background-position: 8px;
        text-indent: 32px;
        font-size: 14px;
        outline: none;
        
    }

    input::-webkit-input-placeholder  {
            color: #000;
            opacity: 0.3;
        }
}
</style>