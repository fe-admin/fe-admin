// 用户名
export function required(message) {
  return {
    required: true,
    message,
    trigger: ["change", "blur"],
  }
}
export function length(min = 4, max = 12) {
  return {
    required: true,
    min,
    max,
    message: `${min}~${max}个字符`,
    trigger: ["change", "blur"],
  }
}

export function checkChart() {
  return {
    required: true,
    validator: function (rule, value, callback) {
      const flag = !/^[a-z]+([-_0-9a-z])*$/g.test(value);
      if (flag) {
        callback(new Error('请输入小写字母、数字、划线，需要以字母开头'));
      } else {
        callback();
      }
    },
    trigger: ["blur", "change"],
  }
}

export function checkCharts() {
  return {
    required: true,
    validator: function (rule, value, callback) {
      const flag = !/^([-_0-9a-zA-Z\u4e00-\u9fa5])*$/g.test(value);
      if (flag) {
        callback(new Error('请输入汉字、字母、数字、划线'));
      } else {
        callback();
      }
    },
    trigger: ["blur", "change"],
  }
}

export function checkNum() {
  return {
    required: true,
    validator: function (rule, value, callback) {
      const flag = !/^([0-9])*$/g.test(value);
      if (flag) {
        callback(new Error('请输入数字'));
      } else {
        callback();
      }
    },
    trigger: ["blur", "change"],
  }
}

export function checkIp() {
  return {
    required: true,
    validator: function (rule, value, callback) {
      const flag = !/((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/g.test(value);
      if (flag) {
        callback(new Error('请输入IP地址'));
      } else {
        callback();
      }
    },
    trigger: ["blur", "change"],
  }
}




// 服务
export const serviceName = [
  required('请填写服务名称'),
  length(),
  checkCharts()
]

// 组织
export const orgName = [
  required('请填写组织名称'),
  length(),
  checkChart()
]
// 合约
export const chainName = [
  required('请填写合约名称'),
  length(),
  checkCharts()
]

// 通道
export const channelName = [
  required('请填写通道名称'),
  length(),
  checkChart()
]
// 服务
export const caName = [
  required('请填写CA名称'),
  length(),
  checkCharts()
]