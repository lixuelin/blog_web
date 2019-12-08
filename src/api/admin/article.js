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
    }
};

module.exports = ArticleApi;