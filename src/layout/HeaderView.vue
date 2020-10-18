<template>
  <div class="view">
      <img :src="imgsrc" />
  </div>
</template>

<script>
export default {
    name: 'HeaderView',
    props: {
        imgsrc: String
    }
}
</script>

<style type="sass">
.view {
    width: 100%;
    height: 435px;
}
</style>