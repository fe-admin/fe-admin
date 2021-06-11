export interface MsgItem {
  id: string;
  type: string;
  subType: string;
  content: string;
  receiveTime: string;
  status: number;
  statusStr: string;
}

export interface MsgList {
  [index: number]: MsgItem;
}

export interface SubscribeNumMap {
  total: number;
  web: number;
  email: number;
  mobile: number;
}

export interface SubscribeItem {
  id: string;
  msgType: string;
  children?: SubscribeChildrenItem[];
}

export interface SubscribeChildrenItem {
  id: string;
  msgType: string;
  web: boolean;
  email: boolean;
  mobile: boolean;
  receiveUser: string;
}
