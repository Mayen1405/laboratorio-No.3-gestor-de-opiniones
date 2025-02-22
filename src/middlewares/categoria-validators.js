import { body, param } from "express-validator";
import { categoryExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";


export const createCatValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("category").notEmpty().withMessage("La categoria es requerida"),
    body("description").notEmpty().withMessage("La  es requerida"),

    validarCampos,
    handleErrors
];

export const deleteCatValidator = [
    param("cat").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("cat").custom(categoryExists),
    validarCampos,
    handleErrors
]

export const updateCatValidator = [
    param("id", "No es un ID válido").isMongoId(),
    param("id").custom(categoryExists),
    validarCampos,
    handleErrors
]

export const getCatByIdValidator = [
    param("cat").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("cat").custom(categoryExists),
    validarCampos,
    handleErrors
]