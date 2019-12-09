/**
 * 文章请求配置
 * createArticle: 添加文章
 *
 */

const ArticleApi = {
  createArticle: {
    method: "post",
    url: "/article"
  },
  getArticle: {
    method: "get",
    url: "/article"
  },
  getArticles: {
    method: "get",
    url: "/article/list"
  }
};

module.exports = ArticleApi;
