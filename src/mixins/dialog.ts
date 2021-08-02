/**
 * 分页混入
 * @date 2020-08-14
 * @returns {any}
 */
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "DialogMixin",
})
export default class DialogMixin extends Vue {
  dialogShow = "";
  dialogClose(): void {
    this.dialogShow = "";
  }
}
