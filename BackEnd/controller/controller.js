const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async(req,res)=>{
        res.status(200).json({msg: "The API is running!!!"})
    },

    //Controller para listar todos os usuários do banco
    listAllUsers: async(req,res)=>{
        try{
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch(error){
            res.status(500).json({error: "Erro ao obter a lista de usuários"})
        }
    },

    //listar usuário por id
    listByID: async(req,res)=>{
        try{
            const sql = await clientController.getByID(req.params.id);

            if(sql.length > 0){
                res.status(200).json(sql)
            }
            else{
                res.status(401).json({msg:"Não existe registro no banco com este ID"})
            }
        }
        catch(error){
            return error
        }
    },

    //Criar um novo usuário
    createNewUser: async(req,res)=>{
        const {id,nome,sobrenome,idade} = req.body;

        try{
            const sql = await clientController.getByID(id);

            if(sql.length > 0){
                res.status(401).json({msg: "O ID já está cadastrado no BD"})
            }
            else{
                await clientController.registerUser(id,nome,sobrenome,idade);
                res.status(201).json({msg:"Usuário cadastrado com sucesso"});
            }
        }
        catch(error){
            return error
        }
    },

    //cadastrar um novo usuário no banco 
    registerSenai: async(req,res)=>{
        const {id,nome,sobrenome,email,senha} = req.body;

        try{
            const sql = await clientController.getByEmail(email);

            if(sql.length > 0){
                res.status(401).json({msg: 'O email já está cadastrado na base de dados, insira um email diferente'});
            }
            else{
                await clientController.registerSenai(id,nome,sobrenome,email,senha);
                res.status(201).json({msg:"Usuário cadastrado com sucesso"});
            }
        }
        catch(error){
            console.log(error);
            res.status(500).json({msg:"Ocorreu um erro durante o registro do usuário"});
        }
    },

    login:async(req,res)=>{
        let {email,senha} = req.body;

        try{
            const sql = await clientController.validateLogin(email,senha);

            if(sql.length > 0){
                res.status(200).json({msg: "Email e senha validados com sucesso!!!"})
            }
            else{
                res.status(401).json({msg:"Email ou senha incorretos"});
            }
        }
        catch(error){
            if(error){
                res.status(500).json(error);
            }
        }
    },




    //route root
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //Controller para listar todos os usuários do banco
    listAllUsers: async (req, res) => {
        try {
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de usuários" })
        }
    },

    //listar usuário por id
    listByID: async(req,res)=>{
        try{
            const sql = await clientController.getByID(req.params.id);

            if(sql.length > 0){
                res.status(200).json(sql)
            }
            else{
                res.status(401).json({msg:"Não existe registro no banco com este ID"})
            }
        }
        catch(error){
            return error
        }
    },

    //Criar um novo usuário
    createNewUser: async(req,res)=>{
        const {id,nome,sobrenome,email,senha} = req.body;

        try{
            const sql = await clientController.getByEmailLogin(email);

            if(sql.length > 0){
                res.status(401).json({msg: "O ID já está cadastrado no BD"})
            }
            else{
                await clientController.registerSenaiLogin(id,nome,sobrenome,email,senha);
                res.status(201).json({msg:"Usuário cadastrado com sucesso"});
            }
        }
        catch(error){
            return error
        }
    },

    //cadastrar um novo usuário no banco
    registerMusiload: async (req, res) => {
        const { id, nome, idade, email, senha } = req.body;

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: 'O email já está cadastrado na base de dados, insira um email diferente' });
            }
            else {
                await clientController.registerUser(id, nome, idade, email, senha);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro durante o registro do usuário" });
        }
    },

    // Login: async (req, res) => {
    //     const { email, senha } = req.body;

    //     try {
    //         const sql = await clientController.validateLogin(email);

    //         if (sql.length > 0 && sql[0].senha === senha) {
    //             res.status(200).json({ msg: "Email e senha validados com sucesso!!!" })
    //         }
    //         else {
    //             res.status(401).json({ msg: "Email ou senha incorretos" });
    //         }
    //     }
    //     catch (error) {
    //         if (error) {
    //             res.status(500).json(error);
    //         }
    //     }
    // },



    //aluno
    registerImageStudents: async (req, res) => {
        try {
            const { id, nome, sobrenome, email, senha, imagemBase64 } = req.body;

            const sql = await clientController.getByEmailStudents(email);

            console.log(sql);

            if (sql.length > 0) {
                res.status(404).json({ msg: "O email já existe" });
            }
            else {
                const result = await clientController.registerImage(id, nome, sobrenome, email, senha, imagemBase64);
                return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        } catch (error) {
            console.error('Erro ao registrar usuário com a imagem', error);
           
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },
    
    //controller para listar todos os alunos
    getAllUsers: async (req, res) => {
        try {
            const client = await clientController.getAllusers();
            res.status(200).json(client);
        }
        catch (error) {
            res.status(500).json({ msg: 'Erro no servidor' })
        }
    },

    //professor
    registerProfessor: async (req, res) => {


        try {
            const { id, nome, sobrenome, email, senha } = req.body;
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(404).json({ msg: "O email já existe" });
            }
            else {
                const result = await clientController.registerTeacher(id, nome, sobrenome, email, senha);
                return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            console.error('Erro ao registrar usuário com a imagem', error);
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },
    loginProfessor: async (req, res) => {
        let { email, senha } = req.body;
    },













    //controller para reset
    getEmailReset: async (req, res) => {
        let { email } = req.body

        email = email.toLowerCase();

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(200).json({ msg: 'Success' })
            }
            else {
                res.status(404).json({ msg: "Email não está cadastrado no BD" });
            }
        }
        catch (error) {
            if (error) {
                res.status(500).json(error);
            }
        }
    },

    resetPassword: async (req, res) => {
        let { email, senha } = req.body
        email = email.toLowerCase();
        console.log(req.body)
        try {
            await clientController.updatePassword(email, senha);
            res.status(200).json({ msg: "Senha atualizada com sucesso" });

        }
        catch (error) {
            console.log("Erro ao redefinir a senha");
            res.status(500).json({ msg: "Erro no servidor" })
        }

    },

};

module.exports = userController;