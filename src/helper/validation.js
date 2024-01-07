function isValidId(req, res, next) {
  const { id, usersId, users_infoId } = req.params;

  if (id) checkId(id);
  if (usersId) checkId(usersId);
  if (users_infoId) checkId(users_infoId);

  function checkId(data) {
    if (typeof data != 'string' && typeof data != 'number') throw new Error('Invalid type of id');
    if (isNaN(data)) throw new Error('Id is not a number');
    if (data < 0) throw new Error('Id is less than 0');
  }

  next();
}

function isValidInfo(req, res, next) {
  const { name, surname, birth, city, age } = req.body;

  if (typeof name != 'string') throw new Error('Invalid type of name');
  if (typeof surname != 'string') throw new Error('Invalid type of surname');
  if (typeof city != 'string') throw new Error('Invalid type of city');
  if (typeof age != 'string' && typeof age != 'number') throw new Error('Invalid type of age');
  if (!isNaN(name)) throw new Error('Name is not a string');
  if (!isNaN(surname)) throw new Error('Surname is not a string');
  if (!/^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/gm.test(birth)) throw new Error('Birth is invalid');
  if (!isNaN(city)) throw new Error('City is not a string');
  if (isNaN(age)) throw new Error('Age is not a number');
  if (age < 0) throw new Error('Invalid age');

  next();
}

module.exports = { isValidId, isValidInfo };
