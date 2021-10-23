<template>
    <div>
        <div slot="header" class="clearfix">
            <span style="float: left;">产品列表</span>
            <span>名称：
                <input type="text">
                <input type="button" value="搜索">
                <input type="button" value="添加">
                <input type="button" value="选择商品设价">
                <input type="button" value="全部商品设价">
                <input type="button" value="导出">
            </span>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">

            <el-table-column
                    prop="checked"
                    label="全选"
                    width="40">
                   <el-checkbox v-model="checked"></el-checkbox>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="编号"
                    width="81">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="名称"
                    width="780">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="销售价格"
                    width="110">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="库存"
                    width="110">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="状态"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="首页显示"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="认筹卷"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop=""
                    label="认筹卷数量"
                    width="80">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small">下架</el-button>
                    <el-button type="text" size="small">上架</el-button>
                    <el-button type="text" size="small">修改</el-button>
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">图片管理</el-button>
                    <el-button type="text" size="small">认筹卷管理</el-button>
                    <el-button type="text" size="small">扩展属性</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div>
            <el-button-group>
                <el-button>共{{tableData.length}}记录</el-button>
                <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </el-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        data() {
            return {

                tableData: [{
                    checked: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    checked: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    checked: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    checked: false,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        }
    }
</script>

<style scoped>

</style>