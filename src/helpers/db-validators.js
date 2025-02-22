import User from "../User/user.model.js";
import Category from "../Category/category.model.js";
import Post from "../Post/post.model.js";
import Comment from "../Comment/comment.model.js";

/* usuarios db-validators*/

export const emailExist = async(email = "") =>{
    const exist = await User.findOne({email});
    if(exist){
        throw new Error(`The email ${email} is already registered`);
    }

};

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const uidExist = async(uid = "") =>{
    const exist = await User.findById(uid);
    if(!exist){
        throw new Error("No exixte el ID proporcionado");
    }
};


/* categoria db-validators*/

export const categoryExists = async (id = "") => {
    const exist = await Category.findById(id);
    if (!exist) {
        throw new Error("La categoría no existe");
    }
};

/* post db-validators*/
export const postExists = async (id = "") => {
    const exist = await Post.findById(id);
    if (!exist) {
        throw new Error("La publicación no existe");
    }
};

/*comentario db-validator*/

export const commentExists = async (id = "") => {
    const exist = await Comment.findById(id);
    if (!exist) {
        throw new Error("El comentario no existe");
    }
};





