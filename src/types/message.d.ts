interface MsgItem {
  id: string;
  type: string;
  subType: string;
  content: string;
  receiveTime: string;
  status: number;
  statusStr: string;
}

interface MsgList {
  [index: number]: MsgItem;
}
