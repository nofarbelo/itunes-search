const Users = require('../models/users-model')

createUser = async (req, res) => {
    console.log(req.body.payload)
    let details = req.body.payload;

    Users.findOne({name: details.username}, (err, user) => {
        let updateUser;
        console.log(user)
        if (err) return res.send("error")
        if (user) {
            user.password = details.password;
            updateUser = user;
        } else {
            updateUser = new Users({name: details.username, password: details.password})
        }

        console.log(updateUser)
        updateUser.save().then(() => {
            return res.send("ok")
        })
    })
    res.send("ok")
    
}

module.exports = {
    createUser
}
