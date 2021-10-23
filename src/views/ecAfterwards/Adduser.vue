<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号:" prop="userNo">
            <el-input v-model="ruleForm.userNo" placeholder="说明:建议使用手机号"></el-input>
        </el-form-item>
        <el-form-item label="姓名:" prop="username">
            <el-input v-model="ruleForm.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="默认密码:123456"></el-input>
        </el-form-item>
        <el-form-item label="角色:" prop="role">
            <el-select v-model="ruleForm.role" placeholder="请选择角色" style="float: left">
                <el-option label="会员" value="shanghai"></el-option>
                <el-option label="店长" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="电话:" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址:" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="内容:" prop="content">
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 8, maxRows:16}"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
        </el-form-item>
        <el-form-item label="状态:" prop="very">
            <el-select v-model="ruleForm.very"  style="float: left">
                <el-option label="启用" value="shanghai"></el-option>
                <el-option label="禁用" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "Adduser",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    userNo:'',
                    username:'',
                    pass: '',
                    role:'',
                    phone: '',
                    address:'',
                    content:'',
                    very:''
                },
                rules: {
                    userNo: [
                            { required: true, message: '请输入账号', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                    username: [
                        { required: true, message: '请输入姓名', trigger: 'change' }
                    ],
                    role: [
                        { required: true, message: '请选择角色', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请输入电话', trigger: 'blur' },
                        { min: 8, max: 11, message: '长度在 8到 11 个字符', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请选择家庭地址', trigger: 'change' }
                    ],
                    pass: [
                        {required: true, validator: validatePass, trigger: 'blur' }
                    ],
                }
            };
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

<style scoped>

</style>