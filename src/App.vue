<script>
import App from "./mixins/app";
import { tbsMenus } from "@/config";
export default {
  name: "Main",
  mixins: [App],
  data() {
    return {
      menuData: tbsMenus,
    };
  },
};
</script>
