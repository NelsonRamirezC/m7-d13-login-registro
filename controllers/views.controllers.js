const home = (req, res) => {
    res.render("home", {
        homeView: true,
    });
}

const login = (req, res) => {
    res.render("login", {
        loginView: true
    });
};

const registro = (req, res) => {
    res.render("registro");
};

const perfil = (req, res) => {
    res.render("perfil", {
        usuario: req.usuario
    });
};

const reclamos = (req, res) => {
    res.render("reclamos");
}

 
let controladores = {
    home,
    login,
    registro,
    perfil,
    reclamos
};

export default controladores;