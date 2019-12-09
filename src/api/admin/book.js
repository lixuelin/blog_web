/**
 * 书籍请求配置
 * createBook: 添加书籍
 * getBook: 获取单本书籍
 * getBooks: 获取多本书籍
 *
 */

const BookApi = {
  createBook: {
    method: "post",
    url: "/book"
  },
  getBook: {
    method: "get",
    url: "/book"
  },
  getBooks: {
    method: "get",
    url: "/book/list"
  }
};

module.exports = BookApi;
