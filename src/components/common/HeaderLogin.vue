<template>
  <div class="header">
    <div class="header_content">
      <div class="logo">
        <div class="img_content">
          <img src="~@/assets/img/logo.png" class="logo_img">
        </div>
          <span >消防物联网管理平台</span>
      </div>
       <div class="weclome">
               <span class="">欢迎您,管理员</span>
          </div>
         
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  }
};
</script>
<style  scoped>
.header {
  background: #2e3a42;
  height: 50px;
  width: 100%;
}
.header_content {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.logo {
  display: inline-block;
  width: 250px;
}
.img_content {
  display: inline-block;
  height: 30px;
  width: 50px;
  padding: 10px 0 10px 0;
}
.logo span {
  display: inline-block;
  vertical-align: top;
  color: #fff;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}
.weclome{
   display: inline-block;
   vertical-align: top;
   font-size: 14px;
   color: #fff;
   line-height: 50px;
   margin-left: 830px;
}
</style>