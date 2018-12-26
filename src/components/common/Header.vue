<template>
  <div class="Header">
    <div class="header_main">
      <div class="logo">
        <img
          src="~@/assets/img/ctcc_logo.png"
          alt="中国电信"
        >
        <img
          src="~@/assets/img/logo_new.png"
          alt="浙江中辰集团"
        >
      </div>
      <div class="user_info">
        <el-dropdown>
      <span class="el-dropdown-link">
        您好,{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>忘记密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
</el-dropdown>
      </div>
      <div class="select_MonitorCenter">
        <el-select
          v-model="value"
          class="select_input"
          placeholder="请选择单位"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="menu">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 这里的:index属性要求字符串 -->
          <!-- 这里的:key是规范解决vscode编辑器红线报错 -->
          <template
            v-for="(item ,index) in menu"
            :index="index.toString()"
          >
            <el-menu-item
              :index="index.toString()"
              v-if="item.son.length==0"
              :key="index.toString()"
            >{{item.name}}</el-menu-item>
            <template v-if="item.son.length!=0">
              <el-submenu
                :index="index.toString()"
                :key="index.toString()"
              >
                <template slot="title"><a href="">{{item.name}}</a></template>
                <template v-for="(v,key) in item.son">
                  <el-menu-item
                    v-if="v.son&&v.son.length==0"
                    :index=" index.toString()+ key"
                    :key="key.toString()"
                  >{{v.name}}</el-menu-item>
                  <template v-if="v.son&&v.son.length!=0">
                    <el-submenu
                      :index="index.toString()+ key"
                      :key="key.toString()"
                    >
                      <template slot="title"><a href="">{{v.name}}</a></template>
                      <el-menu-item
                        v-for="(value,i) in v.son"
                        :index="index.toString()+ key+ i"
                        :key="i.toString()"
                      ><a href="">{{value.name}}</a></el-menu-item>
                    </el-submenu>
                  </template>
                </template>

              </el-submenu>
            </template>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import { MonitorCenterList, MenuList } from "../../api/api";
export default {
  data() {
    return {
      options: "",
      value: "",
      username: "",
      activeIndex2: "0",
      menu: [
        { name: "1", son: [] },
        { name: "2", son: [{ name: "1" }] },
        { name: "4", son: [] },
        { name: "3", son: [] }
      ]
    };
  },
  methods: {
    MonitorCenterList() {
      MonitorCenterList().then(res => {
        this.options = res.data.sub_list;
        this.username = res.data.username;
      });
    },
    MenuList() {
      MenuList().then(res => {
        console.log(res.data);
        this.menu = res.data.categoryList;
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.MonitorCenterList();
    this.MenuList();
  }
};
</script>

<style  >
/* elementui+vue项目中，在当前vue文件中使用style scoped包裹的样式中重置input框的样式无法生效 */
.Header {
  width: 100%;
  height: 50px;
  background: #000;
  color: #c0c4cc;
}
.header_main {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.logo {
  width: 110px;
  height: 50px;
  float: left;
}
.logo img {
  width: 40%;
  height: 40px;
  margin-top: 5px;
}
.user_info {
  height: 50px;
  width: 120px;
  /* background: red; */
  float: left;
  line-height: 50px;
}
.select_MonitorCenter {
  width: 120px;
  float: left;
  height: 50px;
  line-height: 50px;
}
.el-input__inner {
  background: #000;
  border: 0;
}
.menu {
  background: red;
  float: left;
  margin-left: 10px;
}
.el-menu-item {
  padding: 0 7px;
}
.el-menu.el-menu--horizontal
/* ,.el-menu--horizontal>.el-menu-item.is-active */
{
  border:0
}
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 50px;
  line-height: 50px;
}
.el-menu--popup-bottom-start {
  margin-top: 0;
}
.el-submenu__title {
  padding: 0 7px;
}
.el-dropdown-menu__item--divided:before,
.el-menu,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: #000;
  color: #c0c4cc;
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background: #000;
}
a {
  color: #c0c4cc;
  text-decoration: none;
}
a:hover {
  color: #fff;
}
</style>