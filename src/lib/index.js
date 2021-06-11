/*
 * @Author: jubao.tian
 * @Date: 2020-07-15 10:55:28
 * @Last Modified by: jubao.tian
 * @Last Modified time: 2020-08-19 16:27:40
 */

// 1：成功（本步）；2：失败；3：结束（流程结束）
export function checkTaskStatus(list) {
    let flag = false;
    if (Array.isArray(list)) {
        const res = list.filter(item => item.taskLogStatus === 2 || item.taskLogStatus === 3);
        flag = !!res.length;
    }
    return flag;
}

export function scrollIntoView(element) {
    const rect = element.getBoundingClientRect();
    if (rect) {
        document.documentElement.scrollTop = document.documentElement.scrollTop + (rect.y || rect.top) - 60;
    }
}

export function scrollToFocus() {
    const ele = document.querySelector('.el-form-item__error');
    const input = ele.parentNode.querySelector('input');
    if (input) {
        scrollIntoView(input);
        input.focus();
    }
}
