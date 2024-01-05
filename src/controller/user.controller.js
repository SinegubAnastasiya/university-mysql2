const express = require('express')
const route = express.Router()
const { createUsers, getAllUsers, getUserById, updateUserById } = require('../service/user.service')

route.post('/', async (req, res) => {
    try {
        const { name, surname, birth, city, age } = req.body
        const data  = await createUsers(name, surname, birth, city, age)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getAllUsers()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await getUserById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:usersId/:users_infoId', async (req, res) => {
    try {
        const { usersId, users_infoId } = req.params
        const { name, surname, birth, city, age } = req.body
        const data = await updateUserById(usersId, users_infoId, name, surname, birth, city, age)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', (req, res) => {
    try {
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.patch('/', (req, res) => {
    try {
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route