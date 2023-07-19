const home = (req, res) => {
    res.render("home", {
        homeView: true
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

let controladores = {
    home,
    login,
    registro,
};

export default controladores;