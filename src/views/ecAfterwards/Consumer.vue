<template>

    <div>

        <div slot="header" class="clearfix">
            <span style="float: left;">用户管理</span>
            <span style="float: right">账号或姓名：
                    <input type="text" ><el-button  type="button">搜索</el-button>
                 <el-button  type="button">添加</el-button>
            </span>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%;">
            <el-table-column
                    prop="id"
                    label="序号"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="account"
                    label="账号"
                    width="400">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="160">
            </el-table-column>
            <el-table-column
                    prop="isAdmin"
                    label="是否为管理员"
                    width="185">
              <template slot-scope="scope">
                <span v-if="scope.row.isAdmin === 0">否</span>
                <span v-else>是</span>
              </template>
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="电话"
                    width="330">
            </el-table-column>
            <el-table-column
                    prop="useStatus"
                    label="使用状态"
                    width="220">
              <template slot-scope="scope">
                <span v-if="scope.row.useStatus === 0">冻结</span>
                <span v-else>正常</span>
              </template>
            </el-table-column>
          <el-table-column
              prop="address"
              label="住址"
              width="220">
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
            <span >共有 <span style="color: coral">{{totals}}</span> 条记录</span>
            <el-button-group>
                <el-button type="primary" @click="cli('homeP')">首页</el-button>
                <el-button type="primary" @click="cli('prevP')">上一页</el-button>
                <el-button type="primary" @click="cli('nextP')">下一页</el-button>
                <el-button type="primary" @click="cli('lastP')">尾页</el-button>
            </el-button-group>
            <span>当前页数:{{pageNum}}/{{pages}}&nbsp;</span>
            <span>输入页数: <input type="text" v-model="val" style="width: 25px"> <input type="button" @click="toPage()" value="确定"></span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "consumer",
      methods:{
        toPage:function () {
          this.$axios.get("/toPage?val="+this.val).then(res=>{
            this.page(res)
          }).catch(err=>{

          })
        },
        page:function (res){
          this.tableData=res.data.list
          this.totals=res.data.total
          this.pageNum=res.data.pageNum
          this.pages=res.data.pages
        },
        cli:function (value){
          this.$axios.get("/refreshto?val="+value).then(res=>{
            this.page(res)
          }).catch(err=>{

          })
        }
      },
      created() {
        this.$axios.get("/getPuser").then(res=>{
          this.page(res)
        }).catch(err=>{

        })
      },
      data() {
            return {
                val:'',
                tableData: [],
                totals: 0,
                pageNum: 0,
                pages:0
            }
        }
    }
</script>

<style scoped>

</style>
