<template>
<div>
  <div>
    <label style="float: left">优惠劵管理</label>
    <el-button style="float: right" @click="dialogVisible=true">添加</el-button>
  </div>
  <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
    <el-table-column
        prop="id"
        label="编号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="values"
        label="面值">
    </el-table-column>
    <el-table-column
        prop="createTime"
        label="有效期开始">
    </el-table-column>
    <el-table-column
        prop="lastTime"
        label="有效期结果">
    </el-table-column>
    <el-table-column
        prop="type"
        label="状态">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="" type="text" size="small">修改</el-button>
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

  <el-dialog
      title="优惠卷管理"
      :visible.sync="dialogVisible"
      width="660px"
      :before-close="handleClose">
    <el-form :model="ruleForm"  label-width="100px" >
      <el-form-item  label="优惠券名称:" prop="text" >
        <el-input  v-model="ruleForm.name" ></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="10">
          <el-form-item label="面值:" prop="text">
            <el-input v-model="ruleForm.value" placeholder="请输入数字"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="使用最低金额:" prop="text">
            <el-input v-model="ruleForm.money" placeholder="订单金额满xx使用"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="优惠券份数:" prop="text">
            <el-input v-model="ruleForm.num" placeholder="请输入数字"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="有效期开始:" prop="text">
            <el-input v-model="ruleForm.creates" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="有效期结束:" prop="text">
            <el-input v-model="ruleForm.lasts" ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="1">
          <el-form-item label="是否启动:" >
            <select>
              <option >启动</option>
              <option >禁用</option>
            </select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="优惠券介绍:" >
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="ruleForm.testplogss">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>





</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        value: '',
        money: '',
        num: '',
        creates: '',
        lasts: '',
        type:'',
        testplogss:''
      },
      tableData: [{
        id: 1,
        name: '5元劵',
        values: 5,
        createTime:'2017/12/13 0:00:00',
        lastTime:'2022/1/31 0:00:00',
        type:'未启用'
      },
      ],
      dialogVisible:false,
      rules: {
        name: [
          { required: true, message: '请输入优惠劵名称', trigger: 'blur' },
        ],
        value: [
          { required: true, message: '请输入面值', trigger: 'blur' },
        ],
        money: [
          { required: true, message: '请输入使用最低金额', trigger: 'blur' },
        ],
        num: [
          { required: true, message: '请输入优惠劵份数', trigger: 'blur' },
        ],
        creates: [
          { required: true, message: '请输入有效期开始', trigger: 'blur' },
        ],
        lasts: [
          { required: true, message: '请输入有效期结束', trigger: 'blur' },
        ],
      }

    }

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
  }
}
</script>