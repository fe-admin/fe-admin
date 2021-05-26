import { mapActions } from "vuex";
import { login } from "@/api";
import { debounce, sleep, setFullBackground } from "@/utils";
import { setToken } from "@/utils/auth";
import mixins from "@/mixins";
export default {
  name: "Login",
  mixins: [mixins],
  data() {
    return {
      activeName: "password",
      pwdType: true,
      checked: true,
      loading: false,
      formData: {
        accountName: localStorage.getItem("_userName") || "",
        password: "",
        phone: "",
        smsNumber: "",
      },
      formRule: {
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
      },
      smsText: "获取验证码",
      smsNum: 0,
      waiting: false,
    };
  },
  computed: {
    getSmsText() {
      return "ss";
    },
  },
  created() {
    this.handleLogin = debounce(this.handleLogin);
  },

  methods: {
    ...mapActions(["Login"]),
    async login() {
      this.loading = true;
      const result = Object.assign(this.formData, { token: 1 });
      // const [, result] = await login(this.formData);
      // if (result) {
      // if (this.checked) {
      //   localStorage.setItem("_userName", result.accountName);
      // }
      console.info(result);
      this.Login(result);
      Object.keys(result).forEach((key) => {
        localStorage.setItem(key, result[key]);
      });
      setToken(result.token);
      await sleep(1000);
      this.loginSuccess();
      // }
      this.loading = false;
    },

    loginSuccess() {
      this.$router.push("/dashboard");
    },
    // 账号密码非空验证
    handleLogin() {
      const { activeName } = this;
      if (activeName === "password") {
        const s = this.validat(["accountName", "password"]);
        console.info(s);
        // this.$refs.loginForm.validate((v) => {
        //   if (v) this.login();
        // });
      } else {
        this.$refs.loginForm.validate((v) => {
          if (v) this.login();
        });
      }
    },
    validat(field) {
      return this.$refs.loginForm.validateField(field);
    },
    getSmsNumber() {},
    changePwdType() {
      this.pwdType = !this.pwdType;
    },
    handleClick() {
      this.$refs.loginForm.resetFields();
    },
  },
};
