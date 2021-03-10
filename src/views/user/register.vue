<script>
import Register from "../../components/Register";

export default {
  mixins: [Register],
  name: "Register",
  data() {
    return {};
  },
  methods: {
    registerSuccess() {
      this.$router.replace("/login");
    },
  },
};
</script>
