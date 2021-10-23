<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h3>用户登录</h3>
        </div>
        <el-form :inline="true" class="demo-form-inline" >
            <el-form-item label="用户名:">
                <el-input v-model="user" placeholder="请输入用户名" ></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input placeholder="请输入密码"  v-model="region" show-password></el-input>
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
                user: '',
                region: ''
            }
        },
        methods: {
            onSubmit() {
              this.$axios.get("/validate?user="+this.user+"&pwd="+this.region).then(res=>{
                if (res.data == 1) {
                  this.$router.push({name:'Index',params: {id:this.user}})
                }else{
                  alert("用户名密码不正确或者没有权限")
                }
              }).catch(err=>{

              })
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
