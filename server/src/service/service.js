const { createUsersDB, authUserDB } = require('../repository/repository');

async function createUsers(name, surname, email, password) {
    const result = await createUsersDB(name, surname, email, password);
    if (!result.length) throw new Error('empty');

    return result;
}

async function authUser(email,password){
    const data = await authUserDB(email,password)
    if(!data.length) throw new Error('user is not create')
    return data
}

async function authUser(email, password) {
    const data = await authUserDB(email, password);
    if (!data.length) throw new Error("The user is not registered");
    return data;
  }

module.exports = { createUsers, authUser };