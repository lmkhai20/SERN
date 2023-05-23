
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let aboutMe = (req, res) => {
    return res.render('test/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    aboutMe: aboutMe,
}