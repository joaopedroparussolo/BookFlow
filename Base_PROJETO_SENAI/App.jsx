// import React from "react";
// IMPORT KAUANY




// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
//  import Login from "./src/telas/Login/Login";
// import Cursos from "./src/components/Cursos";
// // import Cadastrar from "../base/src/telas/Cadastro/Cadastro";
// import Home from "../base/src/telas/Home/Home";
// // import Cadastrarsesi from "../base/src/components/Cadastrarsesi";
// import HomeStart from "../base/src/components/HomeStart"
// import Deletar from "./src/components/Deletar";
// // import Loginn from "./src/components/Loginn"
// // import Listar from "./src/components/Listar"
// // import Atualizar from "./src/components/Atualizar"
// import Cadastro from "../base/src/telas/Cadastro/Cadastro";
// // import Login from "../base/src/telas/Login/Login";

// const Stack = createStackNavigator();

// export default function App(){
//     return(
//         // <Cadastrar/>
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="">
//             {/* <Stack.Screen name="HomeStart" component={HomeStart}/>           */}
//             {/* <Stack.Screen name="Cadastrarsesi" component={Cadastrarsesi}/>   */}
//             {/* <Stack.Screen name="Loginn" component={Loginn}/>   


//                  <Stack.Screen name="Listar" component={Listar}/>                                           */}
//                 {/* <Stack.Screen name="Deletar" component={Deletar}/>                                                                                 
//                 <Stack.Screen name="Atualizar" component={Atualizar}/>                                            */}

//                 <Stack.Screen name="Cadastro" component={Cadastro}/>
//                 <Stack.Screen name="Login" component={Login}/>
//                 <Stack.Screen name="Home" component={Home}/>

//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// };

//IMPORT JOÃO

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import XML from '../base/src/components/Xml';

// import Cadastrar from "./src/telas/Cadastro/Cadastro";
// import Home from "./src/telas/Home/Home";
// import Login from "./src/telas/Login/Login";
// import Principal from "./src/telas/Tela Principal/Principal"
// import Secundaria from "./src/telas/Tela Secundária/Secundaria"

// import LoginAP from "./src/components/SesiSenai/LoginAP";
// import Boletim from "./src/components/SesiSenai/Boletim";
// import RegistroAluno from "./src/components/SesiSenai/RegistroAluno";
// import ResetSenha from "./src/components/SesiSenai/Reset";
// import Sobre from "./src/telas/Sobre/Sobre";
// import Upload from "./src/telas/Upload/Upload";
// import Resetar from "./src/telas/Resetar Senha/Resetar";
// // import Home from "./src/ProjetoSesiFront/Home/Home";
// import Cadastro from "./src/ProjetoSesiFront/Cadastro/Cadastro";
// import Login from "./src/ProjetoSesiFront/Login/Login";
// import Principal from "./src/ProjetoSesiFront/Tela Principal/Principal";
// import Secundaria from "./src/ProjetoSesiFront/Tela Secundária/Secundaria";
import { Image } from "@rneui/base";
import Homesenai from "./src/ProjetoSenaiFront/Login/Homesenai";
import CadastroBook from "./src/ProjetoSenaiFront/Tela 2 Cadastro/CadastroBook";
import BookPrincipal from "./src/ProjetoSenaiFront/Tela 3 Principal/BookPrincipal";
import Config from "./src/ProjetoSenaiFront/Tela 4 Configurações/Config";
import TelaSobre from "./src/ProjetoSenaiFront/Tela 5 Sobre/TelaSobre";
import editarPerfil from "./src/ProjetoSenaiFront/Tela 6 Editar Perfil/editarPerfil"
import enviarLivro from "./src/ProjetoSenaiFront/Tela 7 Enviar Livro/enviarLivro"
import HomePage from "./src/ProjetoSenaiFront/Tela 3 Principal/BookPrincipal";
import 'react-native-reanimated'
import 'react-native-gesture-handler'
// import testeAvatar from "./src/ProjetoSenaiFront/TESTE-AVATAR/testeAvatar"


// CADASTRAR SENAI
// import Loginn from "./src/components/Loginn";
// import Cursos from "./src/components/Cursos";
// import Cadastrarsesi from "./src/components/Cadastrarsesi";
// import Listar from "./src/components/Listar";
// import HomeStart from "./src/components/HomeStart";
// import Deletar from "./src/components/Deletar";
// import Atualizar from "./src/components/Atualizar";

const Stack = createStackNavigator();


function App() {
    return (
        // <XML/>
        // <Loginn/>

        <NavigationContainer>
            <Stack.Navigator screenOptions={{

            }} initialRouteName="BookPrincipal">

                {/* <Stack.Screen name="testeAvatar" component={testeAvatar} /> */}


                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="Homesenai" component={Homesenai} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="CadastroBook" component={CadastroBook} />


                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="enviarLivro" component={enviarLivro} />



                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="BookPrincipal" component={HomePage} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'white',
                }} name="Config" component={Config} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/sobreText.png'))}
                        />
                    ),
                    title: '',

                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#A70A0A' }, headerTintColor: 'red',
                }} name="TelaSobre" component={TelaSobre} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#A70A0A' }, headerTintColor: 'red',
                }} name="editarPerfil" component={editarPerfil} />

            </Stack.Navigator>
        </NavigationContainer>
    )



};

export default App


