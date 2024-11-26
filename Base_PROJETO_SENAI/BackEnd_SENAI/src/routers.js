const express = require("express");
const clientController = require("../controller/controller");
const client = require("../config/db")
const router = express.Router();

// router.get('/',clientController.getRoot); //Rota Raiz
// router.get('/api/read', clientController.listAllUsers); //Listar todos os usuários
// router.get('/api/read/:id',clientController.listByID); //Listar usuário por id
//router.post('/api/create',clientController.createNewUser); //Cadastrar um novo usuário
//router.delete('/api/deletar/:id',clientController.deleteUser); //Deletar Usuário
//router.put('/api/atualizar/joao/pedro/:id',clientController.updateUser); //Atualizar Usuário


//projeto
router.get('/',clientController.getRoot);
router.post('/api/login',clientController.login); //Cadastrar um novo usuário
router.get('/api/getBooks',clientController.listAllBooks); //Cadastrar um novo usuário
router.post('/api/usuario',clientController.registerBookflow);
router.post('/api/cadastro_livro',clientController.registerImageBookFlow);
// router.delete('/api/cadastro_livro/:id', clientController.deleteLivro); //Cadastrar um novo usuário

module.exports = router;

