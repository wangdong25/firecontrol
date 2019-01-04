<template>
  <div class="Table">
    <el-table
      :data="list"
      height="620"
      border
      style="width: 100%"
      stripe
      @row-click="handerClick"
    >
      <el-table-column
        v-for="(item ,index) in header"
        :key="index"
        :prop="item.fild"
        :label="item.nickname"
      >
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["list", "header"],
  methods: {
    handerClick(row, event, column) {
      console.log(row.id, event, column);
      this.$store.dispatch('setAlarmid',row.id);
      this.$store.dispatch('setAlarmtype',row.type)
    }
  }
};
</script>
<style  scoped></style>