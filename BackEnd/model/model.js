const connection = require("../config/db");

const { registerMusiload } = require("../controller/controller");

const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM cadastro")
            .catch(erro => console.log(erro));
        return result
    },

    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM cadastro WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, idade, email, senha) => {
        const [result] = await connection.query("INSERT INTO usuario values(?,?,?,?,?)", [id, nome, idade, email, senha])
            .catch(erro => console.log(erro));
        return result
        // await connection.beginTransaction();
        // await connection.commit();        
    },
    

    
    

    // deleteUser: async (id) => {
    //     const [result] = await connection.query("DELETE from musiload WHERE id=?", [id])
    //         .catch(erro => console.log(erro));
    //     return result
    // },

    // atualizarUser: async(nome,sobrenome,idade,id)=>{
    //     const [result] =await connection.query("UPDATE musiload SET nome=?,sobrenome=?,idade=? WHERE id=?",[nome,sobrenome,idade,id])
    //     .catch(erro => console.log(erro));
    //     return result
    // },

    // model para login

    getByEmail:async(email)=>{

        const [result]=await connection.query("SELECT * FROM usuario WHERE email=?",[email])
        .catch(erro => console.log(erro));
        return result
    },
    validateLogin: async(email,senha)=>{
        const [result]=await connection.query("SELECT * FROM cadastro WHERE email=? AND senha=?",[email,senha])
        .catch(erro => console.log(erro));
        return result
    },

    registerMusiload:async(id,nome,sobrenome,email,senha)=>{
        const [result ] = await connection.query('INSERT INTO (?,?,?,?,?)',[id,nome,sobrenome,email,senha])
        .catch(erro => console.log(erro));
        return result
    },

    
// //     //projeto

// // //     getAllUsers: async () => {
// // //         const [result] = await connection.query("SELECT * FROM musiload")
// // //             .catch(erro => console.log(erro));
// // //         return result
// // //     },

// // //     getByID: async (id) => {
// // //         const [result] = await connection.query("SELECT * FROM musiload WHERE id =?", [id])
// // //             .catch(erro => console.log(erro));
// // //         return result
// // //     },

// // //     registerUser: async (id, nome, sobrenome, idade , email , senha) => {
// // //         const [result] = await connection.query("INSERT INTO musiload values(?,?,?,?,?,?)", [id, nome, sobrenome, idade , email, senha])
// // //             .catch(erro => console.log(erro));
// // //         return result
// // //     },
// // //     getByEmail:async(email)=>{

// // //         const [result]=await connection.query("SELECT * FROM musiload WHERE email=?",[email])
// // //         .catch(erro => console.log(erro));
// // //         return result
// // //     },
// // //     validateLogin: async(email,senha)=>{
// // //         const [result]=await connection.query("SELECT * FROM musiload WHERE email=? AND senha=?",[email,senha])
// // //         .catch(erro => console.log(erro));
// // //         return result
// // //     },

// // //     registerMusiload:async(id,nome,sobrenome,email,senha)=>{
// // //         const [result ] = await connection.query('INSERT INTO musiload values(?,?,?,?,?)',[id,nome,sobrenome,email,senha])
// // //         .catch(erro => console.log(erro));
// // //         return result
// // //     },
// // };

// // module.exports = userModel;

// const connection = require("../config/db.js");
// const { loginn } = require("../controller/controller.js");

// const userModel = {

//     //Cadastro Projeto---------------------------------------------------------
//     getByEmail:async(email)=>{

//                 const [result]=await connection.query("SELECT * FROM cadastro WHERE email=?",[email])
//                 .catch(erro => console.log(erro));
//                  return result
//            },

//     // getByID: async (id) => {
//     //     const [result] = await connection.query("SELECT * FROM cadastro_senai WHERE id =?", [id])
//     //         .catch(erro => console.log(erro));
//     //     return result
//     // },

//     registerUser: async (id, nome, idade, email, senha) => {
//         const [result] = await connection.query("INSERT INTO cadastro values(?,?,?,?,?)", [id, nome, idade, email, senha])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     // deleteUser: async (id) => {
//     //     const [result] = await connection.query("DELETE from cadastro_senai WHERE id=?", [id])
//     //         .catch(erro => console.log(erro));
//     //     return result
//     // },

//     // atualizarUser: async(nome,sobrenome,email,senha)=>{
//     //     const [result] =await connection.query("UPDATE cadastro_senai SET nome=?,sobrenome=?,idade=? WHERE id=?",[nome,sobrenome,email, senha])
//     //     .catch(erro => console.log(erro));
//     //     return result
//     // },

//     //Login Projeto ---------------------------------------------------------------------------------------

//     getByEmailLogin:async(email)=>{

//         const [result]=await connection.query("SELECT * FROM cadastro WHERE email=?",[email])
//         .catch(erro => console.log(erro));
//         return result
//     },
//     validateLogin:async(email,senha)=>{
//         const [result]=await connection.query("INSERT INTO cadastro values(?,?)",[email,senha])
//         .catch(erro => console.log(erro));
//         return result
//     },
//     // registerSenaiLogin:async(email,senha)=>{
//     //     const [result ] = await connection.query('INSERT INTO musiload values(?,?)',[email,senha])
//     //     .catch(erro => console.log(erro));
//     //     return result
//     // },

//    // projeto MusiLoad -----------------------------------------------------------------------------------

//     getAllUsers: async () => {
//         const [result] = await connection.query("SELECT * FROM musiload")
//             .catch(erro => console.log(erro));
//         return result
//     },

//     getByID: async (id) => {
//         const [result] = await connection.query("SELECT * FROM musiload WHERE id =?", [id])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     registerUserLoginMusi: async (id, nome, sobrenome, email , senha) => {
//         const [result] = await connection.query("INSERT INTO musiload values(?,?,?,?,?)", [id, nome, sobrenome, email, senha])
//             .catch(erro => console.log(erro));
//         return result
//     },
//     getByEmailMusi:async(email)=>{

//         const [result]=await connection.query("SELECT * FROM musiload WHERE email=?",[email])
//         .catch(erro => console.log(erro));
//         return result
//     },
//     validateLoginMusi: async(email,senha)=>{
//         const [result]=await connection.query("SELECT * FROM musiload WHERE email=? AND senha=?",[email,senha])
//         .catch(erro => console.log(erro));
//         return result
//     },

//     registerMusiload:async(id,nome,sobrenome,email,senha)=>{
//         const [result ] = await connection.query('INSERT INTO musiload values(?,?,?,?,?)',[id,nome,sobrenome,email,senha])
//         .catch(erro => console.log(erro));
//         return result
//     },
// };

//MODEL SESI 21 05 24
// const connection = require("../config/db");

// const userModel = {
//     getAllUsers: async () => {
//         const [result] = await connection.query("SELECT * FROM registeraluno")
//             .catch(erro => console.log(erro));
//         return result
//     },

//     getById: async (id) => {
//         const [result] = await connection.query("SELECT * FROM cadastro WHERE id =?", [id])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     registerUser: async (id, nome, sobrenome, idade) => {
//         const [result] = await connection.query("INSERT INTO cadastro VALUES(?,?,?,?)", [id, nome, sobrenome, idade])
//         return result
//     },

//     // model para login:
//     getByEmail: async (email) => {
//         const [result] = await connection.query("SELECT * FROM login WHERE email=?", [email])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     validateLogin: async (email, senha) => {
//         const [result] = await connection.query("SELECT * FROM login WHERE email=? AND senha=?", [email, senha])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     registerSenai: async (id, nome, sobrenome, email, senha) => {
//         const [result] = await connection.query('INSERT INTO login VALUES(?,?,?,?,?)', [id, nome, sobrenome, email, senha])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     // model do aluno:
//     getByEmailStudents: async (email) => {
//         const [result] = await connection.query("SELECT * FROM registeraluno WHERE email=?", [email])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     validateLoginStudents: async (email, senha) => {
//         const [result] = await connection.query("SELECT * FROM registeraluno WHERE email=? AND senha=?", [email, senha])
//             .catch(erro => console.log(erro));
//         return result
//     },

//     registerImage: async (id, nome, sobrenome, email, senha, imagem) => {
//         try {
//             const [result] = await connection.query("INSERT INTO registeraluno (id, nome, sobrenome, email, senha, imagem) VALUES (?, ?, ?, ?, ?, ?)", [id, nome, sobrenome, email, senha, imagem]);
//             return result;
//         }
//         catch (error) {
//             console.log('erro ao registrar o usuario com a imagem', error)
//         }
//     },
//     // model do professor:
//     getByEmailTeacher: async (email) => {
//         const [result] = await connection.query("SELECT * FROM professores WHERE email=?", [email])
//             .catch(erro => console.log(erro));
//         return result;
//     },

//     validateLoginTeacher: async (email, senha) => {
//         const [result] = await connection.query("SELECT * FROM professores WHERE email=? AND senha=?", [email, senha])
//             .catch(erro => console.log(erro));
//         return result;
//     },

//     registerTeacher: async (id, nome, sobrenome, email, senha,) => {

//         const [result] = await connection.query("INSERT INTO registeraluno values (?, ?, ?, ?, ?, ?)", [id, nome, sobrenome, email, senha])
//             .catch(erro => console.log(erro));
//         return result;
//     },
//     //email para resetar senha aluno
    resetByEmail: async (email) => {
        const [result] = await connection.query("UPDATE * FROM cadastro WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result;

    },
//     //update the password
    updatePassword: async (email, senha) => {
        const result = await connection.query("UPDATE cadastro SET senha=? WHERE email=?",
            [senha, email])
            .catch(error => console.log(error))
        return result;
    },
    
};

module.exports = userModel;