


let users = []

module.exports = {

    login: (req, res, next) => {
        let getuser = users.filter(e => e.username == req.query.username)
        res.status(200).send(getuser)
        console.log('logged in')
    },

    register: (req, res, next) => {

        users.push(req.body)
        let senduser = users.filter(e => e.username == req.query.username)
            res(200).send()

    }

}