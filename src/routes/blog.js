const { SuccessModel, ErrorModel } = require("../model/responseModel");
const {
  getBlogsList,
  getBlogDetail,
  createNewBlog,
  updateBlog,
  deleteBlog 
} = require("../controllers/blog");

// 处理博客相关的路由
const handleBlogRoute = (req, res) => {
  // 定义处理路由的逻辑
  const method = req.method;
  const id = req.query.id;
  const blogData = req.body;

  // 博客列表路由
  if (method === "GET" && req.path === "/api/blog/list") {
    // /api/blog/list?author=zhangsan&keyword=123
    // new SuccessModel()
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getBlogsList(author, keyword);

    return new SuccessModel(listData);
  }
  // 博客详情路由
  if (method === "GET" && req.path === "/api/blog/detail") {
    const detailData = getBlogDetail(id);

    return new SuccessModel(detailData);
  }
  // 新增博客路由
  if (method === "POST" && req.path === "/api/blog/new") {
    const newBlogData = createNewBlog(blogData);

    return new SuccessModel(newBlogData);
  }
  // 更新博客路由
  if (method === "POST" && req.path === "/api/blog/update") {
    const updateBlogData = updateBlog(id, blogData);

    if(updateBlogData) {
        return new SuccessModel('更新博客成功!');
    }else {
        return new ErrorModel('更新博客失败...')
    }
  }
  // 删除博客路由
  if (method === "POST" && req.path === "/api/blog/delete") {
    const deleteBlogData =  deleteBlog(id);
    if(deleteBlogData) {
        return new SuccessModel('删除博客成功!');
    }else {
        return new ErrorModel('删除博客失败...')
    }
  }
};
module.exports = handleBlogRoute;
