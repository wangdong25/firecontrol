<template>
  <div class="AlarmDetail">
    <div class="table_title">
      {{(getTypename||"")+'告警详情'}}
    </div>
    <div
      v-if="this.$store.state.Alarmid"
      class="detail_content"
    >
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="单位告警" name="first">
        <UnitalarmDetail-view></UnitalarmDetail-view>
      </el-tab-pane>
      <el-tab-pane label="消控室" name="second">消控室内容</el-tab-pane>
      <el-tab-pane label="近期告警" name="third">近期告警内容</el-tab-pane>
      <el-tab-pane label="平面图" name="fourth">平面图内容</el-tab-pane>
      <el-tab-pane label="重点消防区域" name="fifth">重点消防区域内容</el-tab-pane>
    </el-tabs>
    </div>
    <div
      v-else
      class="detail_content"
    >
      <div class="no_alarm">
        <img
          src="~@/assets/img/no_alarm.png"
          alt=""
        >
        <div class="no_alarm_tip">请选择左边的告警</div>
      </div>
    </div>
  </div>
</template>
<script>
// console.log(this)

export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  computed: {
    //根据type判断告警类型
    getTypename() {
        //es6 map写法
      const types = new Map([
        ["1", "火警"],
        ["2", "成灾"],
        ["3", "离线"],
        ["4", "关机"],
        ["5", "故障"],
        ["6", "联动"],
        ["7", "反馈"],
        ["8", "屏蔽"],
        ["9", "灭火系统异常"],
        ["10", "智慧用电异常"],
        ["11", "电池欠压"],
        ["12", "拆除"]
      ]);
      //   console.log(this.$store.state.Alarmtype==="1")
      return types.get(this.$store.state.Alarmtype);
    }
  },
  methods:{
    handleClick(){},
  }
};
</script>
<style  scoped>
.AlarmDetail {
  width: 508px;
  height: 740px;
  background: #fff;
  float: left;
  margin-left: 10px;
  border: 1px solid #ddd;
}
.no_alarm {
  text-align: center;
  margin: 150px 0;
}
.no_alarm_tip {
  font-size: 16px;
  color: #b8b8b8;
}
.detail_content{
  padding: 0 15px;
}
</style>