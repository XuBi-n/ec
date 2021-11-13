<template>
  <el-form :model="ruleForm"  label-width="100px" >
    <el-form-item  label="优惠券管理:" prop="text" >
      <el-input  v-model="ruleForm.text" ></el-input>
    </el-form-item>


      <el-row>
        <el-col :span="10">
          <el-form-item label="面值:" prop="text">
            <el-input v-model="ruleForm.text1" placeholder="请输入数字"></el-input>

          </el-form-item>

        </el-col>
      </el-row>

    <el-row>
      <el-col :span="10">
        <el-form-item label="使用最低金额:" prop="text">
          <el-input v-model="ruleForm.text2" placeholder="订单金额满xx使用"></el-input>
        </el-form-item>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span="10">
        <el-form-item label="优惠券份数:" prop="text">
          <el-input v-model="ruleForm.text3" placeholder="请输入数字"></el-input>
        </el-form-item>
      </el-col>
    </el-row>



    <el-row>
      <el-col :span="8">
        <el-form-item label="有效期开始:" prop="text">
          <el-input v-model="ruleForm.text4" ></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
    <el-form-item label="有效期结束:" prop="text">
      <el-input v-model="ruleForm.text5" ></el-input>
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
        v-model="textarea">
    </el-input>

    </el-form-item>

    <el-form-item label="" >
      <el-col :span="4">
      <el-button plain>保存</el-button>
      <el-button plain>取消</el-button>
        </el-col>

    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        text: '',
        text1:'',
        text2:'',
        text3:'',
        text4:'',
        text5:'',
        textarea: ''



      },
    }
  },
  methods: {}
}
</script>