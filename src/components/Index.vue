<template>
    <div class="Index">
        <header-view></header-view>
        <div class="content">
           <alarm-view></alarm-view> 
           <AlarmDetail-view></AlarmDetail-view>
        </div>
        <footer-view></footer-view>
    </div>
    
</template>
<script>
export default {
data() {
return {
  }
 }
}
</script>
<style  scoped>
.Index{
    background: #F8FBFD
}
.content{
    width: 1200px;
    margin: 15px auto;
    overflow: hidden;
}
</style>