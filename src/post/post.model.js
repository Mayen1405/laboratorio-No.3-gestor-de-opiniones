import { Schema, model } from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String, 
     required: true 
  },
  category: {
    type: Schema.Types.ObjectId, 
    ref: 'Category', 
    required: true
  },
  content: {
    type: String, 
    required: true 
  },
  author: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
}, {
    versionKey: false,
    timestamps: true
});

export default model("post", postSchema);