<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h3>用户登录</h3>
        </div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" >
            <el-form-item label="用户名:">
                <el-input v-model="input" placeholder="请输入用户名" ></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input placeholder="请输入密码"  v-model="input" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },

    }
</script>

<style scoped>
    .box-card {
        width: 480px;
        margin: 0 auto;
        padding: 0;
        margin-top: 300px;
    }
    .clearfix:after {
        clear: both
    }
    h3{
        color: coral;
    }
</style>