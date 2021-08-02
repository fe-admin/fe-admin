import { ElMessage } from "element-ui/types/message.d";

export interface FElMessage extends ElMessage {
  closeAll(): void;
}

export interface tabComponent extends Vue {
  name: string;
}

export interface paginationType {
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface getPageParamsType {
  (
    params: Record<string, unknown>,
    page?: undefined | Record<string, unknown>
  ): Record<string, unknown>;
}

export interface dialogCloseType {
  (): void;
}
