import request from "../utils/request";
// 登录
export function codeLogin(query) {
    return request({
      url: '/user/union/login',
      method: 'post',
      data: query
    });
  }