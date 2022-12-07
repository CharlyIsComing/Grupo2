const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../data/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const usersController = {
     login: (req, res) => {
        res.render('users/login', {
            users: userList
        });
    },
        register: (req, res) => {
        res.render('users/register');
    },
    storeUser: (req, res) => {
        let user = req.body;

        user.id = uuidv4();

        userList.push(user);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/users');
    },
}

module.exports = usersController;