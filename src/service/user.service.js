const { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } = require('../repository/user.repository')

async function createUsers(name, surname, birth, city, age) {
    const data = await createUserDB(name, surname, birth, city, age)
    return data
}

async function getAllUsers() {
    const data = await getAllUsersDB()
    return data
}

async function getUserById(id) {
    const data = await getUserByIdDB(id)
    return data
}

async function updateUserById(usersId, users_infoId, name, surname, birth, city, age) {
    const data = await updateUserDB(usersId, users_infoId, name, surname, birth, city, age)
    return data
}

async function deleteUserById(id) {
    const data = await deleteUserDB(id)
    return data
}

module.exports = { createUsers, getAllUsers, updateUserById, deleteUserById }

