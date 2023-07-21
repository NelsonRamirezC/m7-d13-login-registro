import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Usuario = sequelize.define(
    "Usuarios",
    {
        // Model attributes are defined here
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Debe tener formato de correo.",
                },
            },
        },
        imagen: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "avatar.jpg"
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "Usuarios",
    }
);

export default Usuario;
