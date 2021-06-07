import { Component, Ref } from "vue-property-decorator";
import { Action } from "vuex-class";
import { mixins } from "vue-class-component";
import { login } from "@/api";
import { debounce, sleep } from "@/utils";
import { setToken } from "@/utils/auth";
import { pageMixin } from "@/mixins";
import { Component as vComponent } from "vue";
import { ElForm } from "element-ui/types/form";

@Component
export default class Login extends mixins(pageMixin) {
  pwdAlert = false;
  alertMsg = "";
  activeName = "userForm";
  pwdType = true;
  checked = true;
  loading = false;
  userForm = {
    accountName: "",
    password: "",
  };
  phoneForm = {
    phone: "",
    smsNumber: "",
  };
  formRule = {
    accountName: [
      {
        required: true,
        message: "请输入用户名",
        trigger: ["change", "blur"],
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
        trigger: ["change", "blur"],
      },
      {
        min: 6,
        max: 12,
        message: "长度在 6 到 12 个字符",
        trigger: ["change", "blur"],
      },
    ],
    phone: [
      {
        required: true,
        message: "请输入手机号",
        trigger: ["change", "blur"],
      },
      {
        len: 11,
        message: "请输入手机号",
        trigger: ["change", "blur"],
      },
    ],
    smsNumber: [
      { required: true, message: "请输入验证码", trigger: "blur" },
      { len: 6, message: "请输入6位验证码", trigger: "blur" },
    ],
  };
  smsText = "获取验证码";
  smsNum = 0;
  waiting = false;
  @Ref("userForm") readonly userFormEle!: ElForm;
  @Ref("phoneForm") readonly phoneFormEle!: ElForm;
  @Action("Login", { namespace: "user" })
  Login!: (info: UserInfo) => Record<string, unknown>;
  created(): void {
    this.handleLogin = debounce(this.handleLogin);
  }
  async login(): Promise<unknown> {
    this.loading = true;
    const { activeName } = this;
    const [err, result] = await login(this[activeName]);
    if (err) {
      this.pwdAlert = true;
      this.alertMsg = err.message;
    } else {
      this.Login(result);
      setToken(result.token);
      await sleep(1000);
      this.loginSuccess();
    }
    this.loading = false;
    return;
  }
  getCurrentForm(): ElForm {
    const { activeName, userFormEle, phoneFormEle } = this;
    return activeName === "userForm" ? userFormEle : phoneFormEle;
  }
  loginSuccess(): void {
    this.$router.push("/dashboard");
  }
  // 账号密码非空验证
  handleLogin(): void {
    this.getCurrentForm().validate((v) => {
      if (v) this.login();
    });
  }
  changePwdType(): void {
    this.pwdType = !this.pwdType;
  }
  async handleClick(v: vComponent): Promise<unknown> {
    const name = v.name as string;
    this.activeName = name;
    await this.$nextTick();
    return this.getCurrentForm().resetFields();
  }
}
