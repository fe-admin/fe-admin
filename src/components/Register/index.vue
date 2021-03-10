<template>
  <div class="register">
    <div class="register-content">
      <div class="register-form">
        <el-form
          :model="userForm"
          :rules="formRule"
          ref="userForm"
          size="medium"
        >
          <div class="tit">帐号注册</div>
          <el-form-item prop="userName" @submit.native.prevent>
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="11"
              @input="change('userName')"
              clearable
              placeholder="请输入用户名"
              v-model.trim="userForm.userName"
            >
              <svg aria-hidden="true" class="icon" slot="prefix">
                <use xlink:href="#iconzhanghu" />
              </svg>
            </el-input>
          </el-form-item>
          <el-form-item prop="phoneNo" @submit.native.prevent>
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="11"
              @input="change('phoneNo')"
              clearable
              placeholder="请输入手机号"
              v-model.trim="userForm.phoneNo"
            >
              <svg aria-hidden="true" class="icon" slot="prefix">
                <use xlink:href="#iconzhanghu" />
              </svg>
            </el-input>
          </el-form-item>
          <el-form-item prop="email" @submit.native.prevent>
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="50"
              @input="change('email')"
              clearable
              placeholder="请输入邮箱"
              v-model.trim="userForm.email"
            >
              <svg aria-hidden="true" class="icon" slot="prefix">
                <use xlink:href="#iconzhanghu" />
              </svg>
            </el-input>
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="12"
              @change="errCode = 3"
              clearable
              placeholder="请设置您的密码"
              type="password"
              v-model.trim="userForm.userPwd"
            >
              <svg aria-hidden="true" class="icon" slot="prefix">
                <use xlink:href="#iconmima" />
              </svg>
            </el-input>
          </el-form-item>
          <el-form-item prop="userPwdRepeat">
            <el-input
              @keyup.enter.native="handleLogin"
              :maxlength="12"
              clearable
              placeholder="再次设置您的密码"
              type="password"
              v-model.trim="userForm.userPwdRepeat"
            >
              <svg aria-hidden="true" class="icon" slot="prefix">
                <use xlink:href="#iconmima" />
              </svg>
            </el-input>
          </el-form-item>
          <el-form-item class="login-item" prop="checked">
            <el-checkbox class="check" v-model="userForm.checked">
              我已阅读并同意
              <router-link class="link" to>《隐私政策声明》</router-link>
            </el-checkbox>
          </el-form-item>
          <el-form-item class="login-item checked-item">
            <el-button @click="handleLogin" type="violet"
              >同意协议并注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { register } from "../../api";
import { debounce, setFullBackground } from "../../util";

export default {
  name: "Register",
  data() {
    const validateChecked = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请勾选服务协议"));
      } else {
        callback();
      }
    };
    const validatePwd = (rule, value, callback) => {
      if (this.userForm.userPwd !== value) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        phoneNo: "",
        email: "",
        userName: "",
        userPwd: "",
        userPwdRepeat: "",
        bsflag: 0,
        checked: false,
      },

      formRule: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"],
          },
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: ["blur", "change"],
          },
        ],
        phoneNo: [
          {
            required: true,
            message: "请输入手机号",
            trigger: ["blur", "change"],
          },
          {
            min: 11,
            max: 11,
            message: "请输入手机号",
            trigger: ["blur", "change"],
          },
        ],
        userPwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["blur", "change"],
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: ["blur", "change"],
          },
        ],
        userPwdRepeat: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["blur", "change"],
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: ["blur", "change"],
          },
          {
            required: true,
            validator: validatePwd,
            trigger: ["blur", "change"],
          },
        ],
        checked: [
          {
            required: true,
            validator: validateChecked,
            trigger: ["blur", "change"],
          },
        ],
      },
      smsText: "获取验证码",
      smsNum: 0,
      waiting: false,
    };
  },
  created() {
    this.debounceSetFullBackground = debounce(() => {
      setFullBackground(".register");
    });
    this.handleLogin = debounce(this.handleLogin);
  },
  async mounted() {
    setFullBackground(".register");
    window.addEventListener("resize", this.debounceSetFullBackground);
  },
  methods: {
    async register() {
      const { userForm } = this;
      const params = Object.assign({}, userForm);
      delete params.userPwdRepeat;
      delete params.checked;
      const [err] = await register(params);
      if (!err) {
        this.$message({
          message: "注册成功，请登录",
          type: "success",
        });
        this.registerSuccess();
      }
    },
    registerSuccess() {},
    // 账号密码非空验证
    handleLogin() {
      this.$refs.userForm.validate((v) => {
        if (v) this.register();
      });
    },
    change(field) {
      this.$refs.userForm.validateField(field);
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.debounceSetFullBackground);
  },
};
</script>
<style lang="scss" scoped>
.register {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../../assets/imgs/login.svg") 0 0 no-repeat;
    height: 100%;
    z-index: 90;
  }

  &-form {
    width: 400px;
    height: 470px;
    padding: 29px 40px 0;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 16px 0px rgba(54, 54, 64, 0.2);
    border-radius: 4px;
    .tit {
      font-size: 21px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 29px;
      padding-bottom: 8px;
      width: 79px;
      margin: 0 auto 34px;
      white-space: nowrap;
      border-bottom: solid 3px $-aside-menu-color;
    }
    /deep/.el-form-item__content {
      flex: 1;
      display: flex;
    }
    .el-button--violet {
      width: 100%;
    }
    .el-input /deep/.el-input__inner,
    .el-date-editor {
      border-color: #d9d9d9;
      padding: 0 8px;
    }

    .byphone {
      flex: 1;
    }
    .check {
      transform: scale(0.8) translate(-45px, 0);
    }
  }

  .el-form-item.is-error .el-input__inner,
  .el-form-item.is-error .el-input__inner:focus,
  .el-form-item.is-error .el-textarea__inner,
  .el-form-item.is-error .el-textarea__inner:focus {
    border-color: #df1616;
  }
  .checked-item {
    .el-form-item__error {
      top: 25px;
    }
  }
}
</style>
