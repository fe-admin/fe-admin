/**
 * @name 登录页面输入验证
 * */
export default (rule, value, callback) => {
  const patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
  if (!patrn.exec(value)) {
    callback(new Error('请输入6-20个字符，由字母、数字组成（区分大小写）'));
  }
  callback();
};
