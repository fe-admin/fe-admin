interface UserInfo {
  uid: string;
  accountName: string;
  roles: [];
  token: string;
}

interface Loginfo {
  [key: string]: any;
  accountName: string;
  password: string;
}
