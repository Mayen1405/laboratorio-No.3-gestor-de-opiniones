import { Schema, model } from "mongoose";

const commentsSchema = new Schema({
    
    post: { 
        type: Schema.Types.ObjectId, 
        ref: 'Post', 
        required: true 
    },

    author: {
          type: Schema.Types.ObjectId, 
          ref: 'User', 
          required: true 
    },

    content: {
         type: String, required: true 
        },

    createdAt: { 
        type: Date, default: Date.now 
    },

}, {
    versionKey: false,
    timestamps: true
});

userSchema.methods.toJSON = function(){
    const {_v, password, _id, ...user} = this.toObject()
    comments.uid = _id;
    return comments;
};

export default model("comments", commentsSchema);