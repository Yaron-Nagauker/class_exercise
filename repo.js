
const connectedKnex = require('./knex_connector')

const getAllaccounts = () => {
    return connectedKnex('accounts').select('*');
}

const getAccountById = (id) => {
    return connectedKnex('accounts').where('id', id).first();
}

const addNewAccount = (account) => {
    return connectedKnex('accounts').insert(account);
}

const updateAccount = (account, id) => {
    return connectedKnex("accounts").where('id', id).update(account);
}

const deleteAccount = (id) => {
    return connectedKnex("accounts").where('id', id).del();
}

module.exports = {
    getAllaccounts,
    getAccountById,
    addNewAccount,
    updateAccount,
    deleteAccount
}