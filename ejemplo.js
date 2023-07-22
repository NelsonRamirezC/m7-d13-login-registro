import sequelize from "./database/database.js"
import Usuario from "./models/Usuario.models.js";

await sequelize.authenticate();
await sequelize.sync();
    
const findAll = async () => {
    
    let usuarios = await Usuario.findAll();
    usuarios = usuarios.map(usuario => usuario.toJSON());
    console.log("LISTADO DE TODOS LOS USUARIOS DE LA BASE DE DATOS.")
    console.table(usuarios);

}

const findByPk = async (id) => {

    let usuario = await Usuario.findByPk(id);
    console.log("Usuario con ID: "+ id);
    console.table(usuario.toJSON());
};

process.argv.splice(0, 2);
let argumentos = process.argv;
let comando = argumentos[0];


switch (comando) {
    case "findAll":
        findAll();
        break;
    case "findByPk":
        let id = argumentos[1]
        findByPk(id)
        break;
    default:
        console.log("No existe el comando. ", comando)
    break;
}
