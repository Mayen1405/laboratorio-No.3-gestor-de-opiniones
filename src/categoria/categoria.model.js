import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true,
        maxLength: [50, "El nombre no puede superar los 50 caracteres"]
    },
    description: {
        type: String,
        required: [true, "La descripción es obligatoria"],
        maxLength: [200, "La descripción no puede superar los 200 caracteres"]
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

userSchema.methods.toJSON = function(){
    const {_v, password, _id, ...category} = this.toObject()
    category.cat = _id;
    return category;
};

export default model("Category", categorySchema);
