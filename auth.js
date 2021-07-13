const register = function (username) {
    console.log(`user ${username} has been register`)
}

const login = function (username) {
    console.log(`user ${username} has been logged in`)
}
module.exports = {
    register,
    login
}