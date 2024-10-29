const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

// router.get('/',clientController.getRoot); //Rota Raiz
// router.get('/api/read', clientController.listAllUsers); //Listar todos os usuários
// router.get('/api/read/:id',clientController.listByID); //Listar usuário por id
//router.post('/api/create',clientController.createNewUser); //Cadastrar um novo usuário
//router.delete('/api/deletar/:id',clientController.deleteUser); //Deletar Usuário
//router.put('/api/atualizar/joao/pedro/:id',clientController.updateUser); //Atualizar Usuário


//projeto
router.post('/api/Login',clientController.login); //Cadastrar um novo usuário
router.post('/api/Musiload',clientController.registerMusiload); //Cadastrar um novo usuário
// router.post('/api/Validate',clientController.validateLogin); //Validar login


//Aluno
//router.post('/api/login/aluno', clientController.Login);//login dos alunos
//router.post('/api/registeraluno', clientController.registerImageStudents); //cadastrar alunos
//router.get('/api/students', clientController.getAllStudents); //listar todos os alunos
// router.post('/api/user', clientController.getAllUsers); //verificar o email de reset
router.post('/api/reset', clientController.getEmailReset); //resetar a senha
router.post('/api/resetpassword', clientController.resetPassword); //resetar a senha

// professor:
//router.post('/api/login/professor', clientController.loginProfessor); // login
//router.post('/api/registerprofessor', clientController.registerProfessor); // cadastrar professores

module.exports = router;

