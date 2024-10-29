import React, { useState, } from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, TextInput, View, Style, TouchableOpacity, Alert } from "react-native";
import Styles from '../Login/Styles'
import { Input, Button, Icon, Text, Image, LinearGradient } from '@rneui/themed';
import ImagemLogo from '../../../res/img/logo-app.png'
// import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';



export default Login = ({ navigation }) => {

     const [formData, setFormData] = useState('');
     const [email, setEmail] = useState("");
     const [senha, setSenha,] = useState("");
     const [mensagem, setMensagem] = useState('');

     const handleInputChange = (name, value) => {
          setFormData({ ...formData, [name]: value });
     };

     const data = {

          email: email,
          senha: senha,
     }
     const handleResetSenha = () =>{
          navigation.navigate('Resetar');
      }

     //validar que os campos não são vazios
     const handleLogin = async () => {
          if (!email || !senha) {
               setMensagem('Todos os campos são obrigatórios')
               return;
          }

          //envio de informações para a API cadastrar no banco de dados
          try {
               await axios.post('http://10.0.2.2:8085/api/Login', data);
               Alert.alert('Login realizado com sucesso');
               navigation.navigate('Principal');
          } catch (error) {
               console.log(error);
               setMensagem('Ocorreu um erro ao realizar o login. Tente novamente!!!')
          }
     }



     return (

          <SafeAreaView style={Styles.container}>
               <ScrollView>


                    <View style={Styles.divTitulo}>
                         <Text h1 style={Styles.titulo}>Upload</Text>
                         {/* <Text h1>{nome}</Text>aa
                         <Text h1>{email}</Text>
                         <Text h1>{telefone}</Text> */}

                    </View>

                    <View style={Styles.logo}>
                         <Image style={Styles.imgLogo} source={ImagemLogo} />
                    </View>
                    <Input


                         placeholder='Digite o nome da sua música:' placeholderTextColor={'gray'}
                         leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
                         onChangeText={value => setEmail(value)}
                         inputStyle={{ color: '#fff' }}
                    />

                    <Input
                         placeholder='Digite :' placeholderTextColor={'gray'}
                         leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
                         onChangeText={value => setSenha(value)} inputStyle={{ color: '#fff' }}
                    />


                    <View style={Styles.formFooter}>

                    </View>

                    <View style={Styles.LinearGradient}>
                         <Button radius={"lg"} type="gradient"
                              title="Login" onPress={handleLogin} />

                         <TouchableOpacity onPress={() => navigation.navigate('Principal')}></TouchableOpacity>

                    </View>
                    {mensagem ? <Text style={Styles.mensagem}>{mensagem}</Text> : null}

                    <View style={Styles.LinearGradient}>
                         <Button radius={"lg"} type="gradient"
                              title="Esqueceu sua senha?" onPress={handleResetSenha} />

                         <TouchableOpacity onPress={() => navigation.navigate('Principal')}></TouchableOpacity>

                    </View>

               </ScrollView>
          </SafeAreaView>



     );

}

