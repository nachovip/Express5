exports.success = (req, res, msg, status) => {
    res.status(status).send(msg)
}
exports.error = (req, res, msg, status, string) => {
    console.log(string + req.body.name)
    res.send()
}

