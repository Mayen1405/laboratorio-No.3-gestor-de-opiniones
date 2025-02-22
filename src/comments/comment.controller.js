import { hash } from "argon2";
import User from "./user.model.js"
import comment from "../comments/comments.model.js"
import post from "../post/post.model.js"

export const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ msg: 'Post no encontrado' });

    const newComment = new Comment({
      post: postId,
      author: req.user.id,
      content,
    });

    await newComment.save();
    res.json(newComment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('error');
  }
};

export const editComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ msg: 'Comment no encontrado' });
    if (comment.author.toString() !== req.user.id) return res.status(401).json({ msg: 'Not autorizado' });

    comment.content = content;
    await comment.save();
    res.json(comment);

  } catch (err) {

    console.error(err.message);
    res.status(500).send('error');

  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ msg: 'Comment no encontrado' });
    if (comment.author.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    await Comment.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Comment eliminado' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('error');
  }
};
