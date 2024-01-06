const pool = require('../db');

async function createUserDB(name, surname, birth, city, age) {
  const connection = await pool.getConnection();
  const sql = 'INSERT INTO users_info(birth, city, age) VALUES (?, ?, ?)';
  await connection.query(sql, [birth, city, age]);

  const sql1 = 'SELECT * FROM users_info ORDER BY id DESC LIMIT 1';
  const [info_id] = await connection.query(sql1);

  const sql2 = 'INSERT INTO users(name, surname, info_id) VALUES (?, ?, ?)';
  await connection.query(sql2, [name, surname, info_id[0].id]);

  const data = 'SELECT * FROM users_info JOIN users ON users_info.id = users.info_id';
  const [res_data] = await connection.query(data);

  return res_data;
}

async function getAllUsersDB() {
  const connection = await pool.getConnection();
  const sql = 'SELECT * FROM users JOIN users_info ON users.id = users_info.id';
  const [data] = await connection.query(sql);

  return data;
}

async function updateUserDB(usersId, users_infoId, name, surname, birth, city, age) {
  const connection = await pool.getConnection();
  const sql = 'UPDATE users_info SET birth = ?, city = ?, age = ? WHERE id = ?';
  const [data] = await connection.query(sql, [birth, city, age, users_infoId]);

  const sql2 = 'UPDATE users SET name = ?, surname = ?, info_id = ? WHERE id = ?';
  const [data2] = await connection.query(sql2, [name, surname, users_infoId, usersId]);

  const result = 'SELECT * FROM users_info JOIN users ON users_info.id = users.info_id';
  const [res_data] = await connection.query(result);

  return data, data2, res_data;
}

async function getUserByIdDB(id) {
  const connection = await pool.getConnection();
  const sql = 'SELECT * FROM users_info JOIN users ON users_info.id = users.info_id WHERE users_info.id = ?';
  const [rows] = await connection.query(sql, [id]);

  return rows;
}

async function deleteUserDB(id) {
  const connection = await pool.getConnection();
  const sql = 'DELETE FROM users_info WHERE id = ?';
  const [data] = await connection.query(sql, [id]);

  return data;
}

module.exports = { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB };
