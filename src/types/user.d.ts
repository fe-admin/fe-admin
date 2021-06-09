export interface UserInfo {
  uid: string;
  accountName: string;
  roles: [];
  token: string;
}

export interface Loginfo {
  [key: string]: any;
  accountName: string;
  password: string;
}
