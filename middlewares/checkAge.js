const checkAge = (req, res, next) => {
    let isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.redirect('/login')
    }
}

module.exports = checkAge;
