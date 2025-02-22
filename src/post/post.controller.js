import { hash } from "argon2";
import User from "../categoria/categoria.model.js"
import post from "../post/post.model.js"


export const createPost = async (req, res) => {
  try {
    const { title, categoryId, content } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ msg: 'Category not found' });

    const newPost = new Post({
      title,
      category: categoryId,
      content,
      author: req.user.id,
    });

    await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const editPost = async (req, res) => {
  try {
    const { title, categoryId, content } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ msg: 'Category not found' });

    post.title = title;
    post.category = categoryId;
    post.content = content;
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    await Post.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
