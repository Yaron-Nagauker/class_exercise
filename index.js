
const express = require('express');
const repo = require('./accouonts_repo.js');
const path = require('path');



const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '/')));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.get('/accounts', async(req, res) => {
  const accounts = await repo.getAllAccounts();
  res.status(200).json({ accounts });
});

app.get('/accounts/:id', async(req, res) => {
  const id = req.params.id
  const account = await repo.getAccountById(id);
  res.status('200').json({ account });
})

app.post('/accounts', async (req, res) => {
  try
  { 
    const account = req.body
    const date = (new Date()).toUTCString()
    const result = await repo.addNewAccount(account, date);
    res.status(201).json({ 
    res: 'success',
    url: `localhost:8080/accounts/${account.id}`,
    })
  }
  catch(e) {
      res.status(400).send({
      status: 'fail',
      message: e.message
    })
  }
})

app.delete('/accounts/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await repo.deleteAccount(id)
    res.status(200).json({
      res: 'success',
      url: `localhost:8080/accounts/${id}`,
      result
    })
  }
  catch (e) {
    res.status(400).send({
      status: 'fail',
      message: e.message
    })
  }
});

app.put('/accounts/:id', async (req, res) => {
  try {
      const id = req.params.id
      const date = (new Date()).toUTCString()
      account = req.body
      const result = await repo.updateAccount(account, id, date)
      res.status(201).json({
          res: 'success',
          url: `localhost:8080/accounts/${id}`,
          result
      })
  }
  catch (e) {
      res.status(400).send({
          status: 'fail',
          message: e.message
      })
  }
});

app.listen(port, console.log("port 8080"));