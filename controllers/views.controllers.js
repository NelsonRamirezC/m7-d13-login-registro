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

let controladores = {
    home,
    login
}

export default controladores;