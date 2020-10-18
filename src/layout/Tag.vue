<template>
  <div class="tag">
      <span :class="{'red':color==='red', 'blue': color==='blue'}">
          {{text}}
          </span>
  </div>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        color: String,
        text: String
    },
}
</script>

<style type="sass">
.tag{
    font-size: 10px;
    margin: 7px 8px 9px 0px;
    display: inline-block;
    span {
        padding: 2px;
    }
    .red{
        color: #E02500;
        border: 1px solid #E02500;
    }

    .blue{
        color: #2979FF;
        border: 1px solid #2979FF
    }
}
</style>