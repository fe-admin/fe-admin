import { ElMessage } from "element-ui/types/message.d";

export interface FElMessage extends ElMessage {
  closeAll(): void;
}

export interface tabComponent extends Vue {
  name: string;
}
