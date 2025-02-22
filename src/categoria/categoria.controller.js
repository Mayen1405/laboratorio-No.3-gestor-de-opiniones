import categoria from "../categoria/categoria.model.js"
import User from "../User/user.model.js"
import { hash } from "argon2";


export const savecat = async (req, res) => {
    try {
        const data = req.body;
        const categoria = req.product;
   
        if (!categoria) {
            return res.status(404).json({ 
                success: false, 
                message: 'Producto no encontrado' 
            });
        }

        await cat.save();

        res.status(200).json({
            success: true,
            cat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar el producto',
            error
        });
    }
};

export const updatecat = async (req, res) => {
    const { updateCat } = req.params; 
    const data = req.body;
    try { 
        const updatedCat = await Product.findByIdAndUpdate(updateCat, data, { new: true });

        if (!updatedCat) {
            return res.status(404).json({
                success: false,
                message: "      ",
                error: "  "
            });
        }

        return res.status(200).json({
            success: true,
            message: "    ",
            updatedCat
        });

    } catch (err) {
        return res.status(500).json({
            message: "",
            error: err.message
        });
    }
};

