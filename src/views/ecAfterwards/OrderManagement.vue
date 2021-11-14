<template>
<div>
  <div>
    <label style="float: left">订单管理</label>
    <div class="divs">
      <lable style="">员工:</lable>
      <el-select v-model="value" placeholder="所有">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <lable>姓名:</lable>
      <el-input type="text"></el-input>
      <lable>开始日期:</lable>
      <el-input type="text"></el-input>
      <lable>结束日期:</lable>
      <el-input type="text"></el-input>
      <lable>状态:</lable>
      <el-select v-model="value" placeholder="已付款">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button>查询</el-button>
      <el-button>订单导出</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "OrderManagement",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }],
    }
  }
}
</script>

<style scoped lang="scss">
.divs{
  float: right;
  lable{
    font-size: 18px;
  }
}
.el-select{
  width: 100px;
  height: 60px;
}
.el-input{
  width: 100px;
  height: 60px;
}
</style>