const express = require('./config/server');
const rotaHome = require('./app/routes/home')(express);
const rotaUsers = require('./app/routes/users')(express);
const mongo = require('./config/connect_db');

express.post('/item/add', (req, res) => {
  const newItem = new Item({
    nome: req.body.nome,
    cpf: req.body.cpf,
    regiao: req.body.regiao,
    idade: req.body.idade
  });

  newItem.save().then(item => res.redirect('/cadastrados'));
});

express.listen(8080, () => console.log('Server running...'));
