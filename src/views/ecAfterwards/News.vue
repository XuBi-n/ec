<template>
    <div>
        <div slot="header" class="clearfix">
            <span style="float: left;">新闻管理</span>
            <span style="float: right">所属分类：
                  <select>
                      <option>所有</option>
                  </select>
                 <el-button  type="button" @click="dialogVisible=true">添加</el-button>
            </span>

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
                    label="标题"
                    width="860">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="300">
                <template slot-scope="scope">
                    <el-button  type="text" size="small" @click="updateDialogVisible=true">修改</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="float: right">
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

        <!--添加框-->
        <el-dialog
                title="添加新闻"
                :visible.sync="dialogVisible"
                width="660px"
                :before-close="handleClose">
            <el-form :model="addForm" :rules="addFormControl" ref="addForm" label-width="100px" class="demo-editForm">
                <el-form-item label="所属栏目" prop="types" label-width="180px">
                  <el-select v-model="addForm.types" placeholder="活动方案" style="float: left">
                    <el-option label="活动方案" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="标题" prop="name" label-width="180px">
                    <el-input v-model="addForm.name" autocomplete="off"></el-input>
                </el-form-item>
              <el-form-item label="链接地址" prop="url" label-width="180px">
                <el-input v-model="addForm.url" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="封面图片" prop="images" label-width="180px">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList" style="float: left">
                  <el-button size="small" type="primary">选择文件</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item label="内容" prop="textarea" label-width="200px">
                <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="addForm.textarea">
                </el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('addForm')">取 消</el-button>
                <el-button type="primary"  >添 加</el-button>
            </div>
        </el-dialog>


        <!--            修改框-->
        <el-dialog
                title="修改新闻"
                :visible.sync="updateDialogVisible"
                width="660px">
            <el-form :model="updateForm">
                <el-form-item label="标题" prop="name" label-width="180px">
                    <el-input v-model="tableData.types" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="日期" prop="name" label-width="180px">
                    <el-input v-model="tableData.date" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="updateDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="">修 改</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                updateDialogVisible:false,
                dialogVisible:false,
                updateForm:{},
                addForm:{
                  types:'',
                  name:'',
                  url:'',
                  image:'',
                  textarea:''
                },
              fileList: [{
                  name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
              },
                {
                  name: 'food2.jpeg',
                  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }],
                tableData: [{
                    ID:1,date:'2021-12-30',types:'家用洗衣机'
                }],
                addFormControl: {
                  name: [
                    {required: true, message: '请输入标题！', trigger: 'blur'}
                  ],
                  url: [
                        {required: true, message: '请输入链接地址！', trigger: 'blur'}
                    ],

                },
            }
        },
        methods:{
            handleClose(){
                this.resetForm('addForm')
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.dialogVisible=false
                this.addForm={}
            },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
          handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          },
          beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
          }
        }
    }
</script>

<style scoped>

</style>