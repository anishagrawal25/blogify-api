// Controller to get all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "All posts fetched successfully"
    }
  });
};

// Controller to get post by ID
const getPostById = (req, res) => {
  const postId = req.params.id;

  res.status(200).json({
    success: true,
    data: {
      postId: postId
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById
};
