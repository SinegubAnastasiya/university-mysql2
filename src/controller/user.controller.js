const express = require('express');
const route = express.Router();
const { createUsers, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../service/user.service');
const { isValidId, isValidInfo } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');

route.post('/', isValidInfo, async (req, res) => {
  try {
    const { name, surname, birth, city, age } = req.body;
    const data = await createUsers(name, surname, birth, city, age);
    buildResponse(res, 200, data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.get('/', async (req, res) => {
  try {
    const data = await getAllUsers();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:usersId/:users_infoId', isValidId, isValidInfo, async (req, res) => {
  try {
    const { usersId, users_infoId } = req.params;
    const { name, surname, birth, city, age } = req.body;
    const data = await updateUserById(usersId, users_infoId, name, surname, birth, city, age);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUserById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
