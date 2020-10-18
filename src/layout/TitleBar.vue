<template>
  <div>
      <header>
          <slot/>
      </header>
  </div>
</template>

<script>
export default {
    name: 'TitleBar'
}
</script>

<style type="sass">
header {
    width: 100%;
    height: 148px;
    padding-top: 44px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: #0D803D;
}
</style>