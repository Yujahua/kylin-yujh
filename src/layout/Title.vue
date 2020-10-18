<template>
  <div class="title">
      <div class="message">{{title}}</div>
  </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String
    },
}
</script>

<style type="sass">
.title{
    text-align: center;
    
    .message {
        font-size: 14px;
        width: auto;
        height: 20px;
        margin: 24px 0px 12px;
        color: #666;
        position: relative;
        display: inline-block;
        
        }
        ::before, ::after{
            content: '';
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            width: 100px;
            position: absolute;
            display: inline-block;
            top: 10px;
        }
        ::before{
            left: 80px;
        }
        ::after{
            right: 80px;
        }
    
}
</style>