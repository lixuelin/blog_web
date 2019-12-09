/**
 * 标签请求配置
 * createMark: 添加标签
 * getMark: 获取标签
 * getMarks: 获取多个标签
 *
 */

const MarkApi = {
  createMark: {
    method: "post",
    url: "/mark"
  },
  getMark: {
    method: "get",
    url: "/mark"
  },
  getMarks: {
    method: "get",
    url: "/mark/list"
  }
};

module.exports = MarkApi;
