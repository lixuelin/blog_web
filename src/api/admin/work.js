/**
 * 工作请求配置
 * createWork: 添加工作经历
 * getWork: 获取工作经历
 * getWorks: 获取多次工作经历
 *
 */

const WorkApi = {
  createWork: {
    method: "post",
    url: "/work"
  },
  getWork: {
    method: "get",
    url: "/work"
  },
  getWorks: {
    method: "get",
    url: "/work/list"
  }
};

module.exports = WorkApi;
