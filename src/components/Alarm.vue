<template>
  <div class="Alarm">
    <div class="table_title">
      实时告警 <span class="updatatime">最近更新时间 12.00</span>
    </div>
    <div class="table_tabs">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <template v-for="(item,key ) in tabs">
          <el-tab-pane
            :label="item.title"
            :name="key.toString()"
            :key="key"
          >
            <span
              slot="label"
              v-if="item.hasupdate"
            >
              <el-badge
                is-dot
                class="item"
              >{{item.title}}</el-badge>
            </span>
            <template v-for="( value,k ) in item.sub">
              <span
                class="tab_item"
                :class="{'active':indexActive === k}"
                :key="k.toString()"
                @click="getType(k)"
              >
                {{value.name}}
                <el-badge
                  is-dot
                  class="item"
                  v-if=value.hasupdate
                >
                  {{value.number}}
                </el-badge>
                <template v-if=!value.hasupdate>{{value.number}}</template>
              </span>
            </template>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <table-view
      :list="tableData3"
      :header="theader"
    ></table-view>
    <div class="pagination">
       <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    </div>
  </div>
</template>
<script>
import { Tablist } from "../api/api";
export default {
  data() {
    return {
      activeName: 0, //四大类索引
      indexActive: 0, //小类索引
      CurrentPage:1,
      tab_item: "tab_item",
      tabs: [
        {
          title: "火灾自动报警",
          hasupdate: true,
          sub: [
            {
              name: "全部",
              number: 51,
              hasupdate: true
            },
            {
              name: "火警",
              number: 51,
              hasupdate: true
            },
            {
              name: "缺岗",
              number: 1,
              hasupdate: false
            },
            {
              name: "成灾",
              number: 1,
              hasupdate: false
            },
            {
              name: "离线",
              number: 0,
              hasupdate: false
            },
            {
              name: "其他",
              number: 1,
              hasupdate: false
            }
          ]
        },
        {
          title: "智慧用电",
          hasupdate: false,
          sub: [
            {
              name: "全部",
              number: 51,
              hasupdate: true
            },
            {
              name: "告警",
              number: 2,
              hasupdate: true
            },
            {
              name: "离线",
              number: 0,
              hasupdate: false
            }
          ]
        },
        {
          title: "灭火系统异常",
          hasupdate: false,
          sub: [
            {
              name: "全部",
              number: 51,
              hasupdate: true
            },
            {
              name: "异常",
              number: 51,
              hasupdate: true
            },
            {
              name: "离线",
              number: 1,
              hasupdate: false
            }
          ]
        },
        {
          title: "无线智能预警",
          hasupdate: false,
          sub: [
            {
              name: "全部",
              number: 51,
              hasupdate: true
            },
            {
              name: "火警",
              number: 51,
              hasupdate: true
            },
            {
              name: "缺岗",
              number: 1,
              hasupdate: false
            },
            {
              name: "成灾",
              number: 1,
              hasupdate: false
            },
            {
              name: "离线",
              number: 0,
              hasupdate: false
            },
            {
              name: "传输设备",
              number: 0,
              hasupdate: false
            },
            {
              name: "其他",
              number: 1,
              hasupdate: false
            }
          ]
        }
      ],
      theader: [
        { nickname: "单位名称", fild: "monitor_unit_title" },
        { nickname: "编号(合同号)", fild: "monitor_unit_contract_code" },
        { nickname: "网关编号", fild: "getway_code" },
        { nickname: "告警时间", fild: "alarm_time" },
        { nickname: "处理结果", fild: "handler_result" },
        { nickname: "处理人", fild: "handler_name" },
        { nickname: "最近处理时间", fild: "hander_time" },
        { nickname: "*", fild: "get_alarm_time" }
      ],
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {
    this.render();
  },
  methods: {
    handleClick(tab, event) {
      this.indexActive = 0;
      console.log(tab);
    },
    getType(k) {
      this.indexActive = k;
      console.log(k, "222");
      //执行表格渲染
      this.render();
      
    },
    render() {
      let params={tabs:this.activeName,tab: this.indexActive,page:this.CurrentPage};
      Tablist(params).then(res => {
        // console.log(res.data.data);
        this.tableData3 = res.data.data; 
         setTimeout(this.render,3000)   
      });
    },
    handleCurrentChange(val){
      this.CurrentPage=val;
     console.log("当前页:"+val);
      this.render();
    }
  }
};
</script>
<style >
.Alarm {
  width: 680px;
  /* height: 900px; */
  float: left;
  /* background: red; */
}
.table_title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #ebeef5;
  padding: 0 15px;
}
.updatatime {
  color: #b8b8b8;
  font-size: 12px;
  margin: 0 5px;
}
.el-tabs__content {
  overflow: visible;
}
.tab_item {
  color: #666;
  display: inline-block;
  width: 70px;
  font-size: 14px;
  vertical-align: middle;
  text-align: center;
}
.active {
  color: #409eff;
}
.el-tabs__header {
  margin: 0 0 8px;
}
.pagination{
  width: 420px;
  margin: 15px auto;
}
</style>