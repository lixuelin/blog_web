const ArticleApi = {
  queryArticles: {
    method: "get",
    url: "/article"
  },
  queryArticleDetail: {
    method: "get",
    url: "/article/detail"
  }
};

module.exports = ArticleApi;
