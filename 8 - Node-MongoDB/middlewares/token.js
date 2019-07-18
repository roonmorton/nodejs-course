module.exports = (req, res, next) => {
    if (req.body.app !== "app-test001")
        res.send("app invalida");
    else
        next();
};