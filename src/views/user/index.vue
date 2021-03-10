<script>
import Login from "../../components/Login";
export default {
  mixins: [Login],
  name: "Login",
  methods: {
    loginSuccess() {
      if (localStorage.getItem("microId") === "portal") {
        this.locationReplace("/tbs/index");
      } else {
        this.locationReplace("/dashboard");
      }
    },
  },
};
</script>
