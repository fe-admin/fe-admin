<template>
  <div class="login">
    <div class="login-head">
      <div class="login-logo">
        <img class="img" src="/favicon.png" /><svg-icon
          iconName="fe-logo-text"
        />
      </div>
      <div class="desc">Fe Admin 只为一款简单好用的前端中台系统</div>
    </div>
    <el-form :model="formData" :rules="formRule" ref="loginForm" size="medium">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账户密码登录" name="password">
          <el-form-item prop="accountName" @submit.native.prevent>
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="11"
              @change="validat('accountName')"
              placeholder="用户名: admin or user"
              v-model.trim="formData.accountName"
              clearable
            >
              <i slot="prefix" class="el-input__icon fe-font fe-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="12"
              @change="validat('password')"
              :type="pwdType ? 'password' : ''"
              v-model.trim="formData.password"
              placeholder="密码: fe-admin"
              clearable
            >
              <i slot="prefix" class="el-input__icon fe-font fe-lock"></i>
              <i
                slot="suffix"
                @click="changePwdType"
                :class="
                  `el-input__icon fe-font fe-visible ${
                    pwdType ? 'fe-invisible' : 'fe-visible'
                  }`
                "
              ></i>
            </el-input>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="手机号登录" name="phone">
          <el-form-item prop="phone" @submit.native.prevent>
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="11"
              @change="validat('phone')"
              placeholder="请输入手机号！"
              v-model.trim="formData.phone"
            >
              <i slot="prefix" class="el-input__icon fe-font fe-phone"></i>
            </el-input>
          </el-form-item>
          <el-form-item class="sms-item" prop="smsNumber">
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="6"
              v-model.trim="formData.smsNumber"
              placeholder="请输入验证码！"
            >
              <i slot="prefix" class="el-input__icon fe-font fe-message"></i>
            </el-input>
            <el-button @click="getSmsNumber">获取验证码</el-button>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>

      <el-form-item class="remember">
        <el-checkbox v-model="checked">自动登录</el-checkbox>
        <a>忘记密码？</a>
      </el-form-item>
      <el-form-item class="login-item">
        <el-button :loading="loading" @click="handleLogin" type="primary"
          >提 交</el-button
        >
      </el-form-item>
      <el-form-item class="other-type">
        其他登录方式 :
        <svg-icon iconName="fe-zhifubao" />
        <svg-icon iconName="fe-taobao" />
        <svg-icon iconName="fe-weixin" />
        <svg-icon iconName="fe-talk" />
      </el-form-item>
      <fe-footer />
    </el-form>
  </div>
</template>
<script>
import Login from "../js/login";
export default Login;
</script>
<style src="../style/login.scss" lang="scss" scoped></style>
