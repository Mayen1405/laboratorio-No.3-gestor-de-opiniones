import User from "../User/user.model.js";


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





