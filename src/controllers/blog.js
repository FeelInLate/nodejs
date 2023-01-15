// 博客相关的方法
const getBlogsList = (author, keyword) => {
  // 从数据库里拿数据
  // 先返回假数据
  return [
    {
      id: 1,
      title: "标题1",
      content: "内容1",
      author: "zhangsan",
      createdAt: 1673759838263,
    },
    {
      id: 2,
      title: "标题2",
      content: "内容2",
      author: "lisi",
      createdAt: 1673759890909,
    },
  ];
};
// 获取博客详情数据
const getBlogDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: "标题1",
    content: "内容1",
    author: "zhangsan",
    createdAt: 1673759838263,
  };
};
// 创建新的博客
const createNewBlog = (blogData) => {
    // blogData title content
    console.log('blogData', blogData);

    return {
        id: 1
    }
};

// 更新博客
const updateBlog = (id, blogData = {}) => {
    console.log('id', id);
    console.log('blogData', blogData);
    return true;
}
// 删除博客
const deleteBlog = (id) => {
    console.log('id', id);

    return true;
}

module.exports = {
  getBlogsList,
  getBlogDetail,
  createNewBlog,
  updateBlog,
  deleteBlog
};
