import Article from "./admin/article";
import Book from "./admin/book";
import Mark from "./admin/mark";
import Work from "./admin/work";

const api = Object.assign({}, Article, Book, Mark, Work);

export default api;
