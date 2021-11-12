<template>
<div id="changePassword">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名:" prop="username" label-position="left">
      <label >{{ruleForm.username}}</label>
    </el-form-item>
    <el-form-item label="原密码:" prop="oldPwd">
      <el-input v-model="ruleForm.oldPwd"></el-input>
    </el-form-item>
    <el-form-item label="新密码:" prop="newPwd">
      <el-input v-model="ruleForm.newPwd"></el-input>
    </el-form-item>
    <el-form-item label="确认密码:" prop="newPwd">
      <el-input v-model="ruleForm.newPwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "ChangePassword",
  data(){
    return{
      ruleForm: {
        username: 'admin',
        oldPwd:'',
        newPwd:''

      },
      rules: {
        oldPwd: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
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
    }
  }
}
</script>

<style scoped lang="scss">
#changePassword{
  width: 900px;
  height: 1800px;
}
.el-form{
  font-size: 18px;
}

</style>