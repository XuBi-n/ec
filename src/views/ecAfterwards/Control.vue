<template>
        <div>
            <div slot="header" class="clearfix">
                <span style="float: left;">商品一级类别管理</span>
                <el-button style="float: right;margin-top: 65px" type="button">添加</el-button>
            </div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%;">
                <el-table-column
                        prop="ID"
                        label="编号"
                        width="280">
                </el-table-column>
                <el-table-column
                        prop="types"
                        label="一级类别名称"
                        width="1065">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="300">
                    <template slot-scope="scope">
                        <el-button  type="text" size="small">修改</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div>
                <span >共有 <span style="color: coral">{{tableData.length}}</span> 条记录</span>
                <el-button-group>
                    <el-button type="primary">首页</el-button>
                    <el-button type="primary">上一页</el-button>
                    <el-button type="primary">下一页</el-button>
                    <el-button type="primary">尾页</el-button>
                </el-button-group>
                <span>当前页数:1/1&nbsp;</span>
                <span>输入页数: <input type="text" style="width: 25px"> <input type="button" value="确定" disabled=""></span>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Control",
        methods: {

        },

        data() {
            return {
                tableData: [{
                    ID:1,types:'家用洗衣机'
                }]
            }
        }
    }
</script>

<style scoped>
</style>