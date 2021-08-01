




const express = require('express');
const repo = require('./repo.js');
const path = require('path');


const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '/')));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));



app.get('/accounts', async(req, res)=> {
  const accounts = await repo.getAllaccounts();
  res.status('200').json({ accounts });
})

app.get('/accounts:id', async(req, res)=> {
  const id = req.params.id
  const account = await repo.getAccountById(id);
  res.status('200').json({account});
})

app.post('/accounts', async (req, res) => {
  try
  {
    account = req.body
    const result = await repo.addANewAccount(account)
    res.status(201).json({
    res: 'success',
    url: `localhost:8080/accounts/${account}`,
    result
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

app.put('/accounts/:account_id', async (req, res) => {
  try {
      const id = req.params.id
      account = req.body
      const result = await repo.updateAccount(account, id)
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