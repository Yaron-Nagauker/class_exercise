
const connectedKnex = require('./knex_connector')

const getAllAccounts = () => {
    return connectedKnex('accounts').select('*');
}

const getAccountById = (id) => {
    return connectedKnex('accounts').where('id', id).first();
}

const addNewAccount = (account, date) => {
    return connectedKnex('accounts').insert(account).update('created_date', date)
}

const updateAccount = (account, id, date) => {
    return connectedKnex("accounts").where('id', id).update(account).update('last_updated', date)
}

const deleteAccount = (id) => {
    return connectedKnex("accounts").where('id', id).del();
}

module.exports = {
    getAllAccounts,
    getAccountById,
    addNewAccount,
    updateAccount,
    deleteAccount
}