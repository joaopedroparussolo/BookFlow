import React, { useState, } from "react";
import { ImageBackground, SafeAreaView, ScrollView, Styleheet, TextInput, View, Alert, TouchableOpacity  } from "react-native";
import Style from '../Cadastro/Styles';
import { Input, Button, Icon, Text, Image, LinearGradient } from '@rneui/themed'
import logo from '../../../res/img/logo-app.png';
import Styles from "../../telas/Cadastro/Styles";
import axios from 'axios';


export default Cadastro = ({navigation}) => {
     const [formData, setFormData] = useState('');
     const [mensagem, setMensagem] = useState('');
     const [email, setEmail] = useState("");
     const [nome, setNome,] = useState("");
     const [idade, setIdade] = useState("");
     const [senha, setSenha] = useState("");

     const handleInputChange = (name, value) => {
          setFormData({ ...formData, [name]: value });
      };
  
      const data = {
          nome:nome,
          email:email,
          idade:idade,
          senha:senha,
      }
  
      //validar que os campos não são vazios
      const handleCadastrar = async () => {
          if (!nome || !email || !idade || !senha) {
              setMensagem('Todos os campos são obrigatórios')
              return;
          }
  
          //envio de informações para a API cadastrar no banco de dados
          try {
              await axios.post('http://10.0.2.2:8085/api/Musiload', data);
              Alert.alert('Cadastro realizado com sucesso');
              navigation.navigate('Login');
          } catch (error) {
                  console.log(error);
                  setMensagem('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
              }
          }

     return (
          
          <SafeAreaView style={Style.container}>
               <ScrollView>
               
               
                    <View style={Style.divTitulo}>
                         <Text h1 style={Style.titulo}>MusiLoad</Text>
                         {/* <Text h1>{nome}</Text>aa
<Text h1>{email}</Text>
<Text h1>{telefone}</Text> */}

                    </View>

                    <View style={Style.logo}>
               <Image source={require('../../../res/img/logo-app.png')} style={Style.imgLogo} />
               </View>
                    <View style={Style.formCadastro}>
                         <Input
                              placeholder='Digite seu nome artístico:' placeholderTextColor={'gray'}
                              leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }}
                              onChangeText={value => setNome(value)}
                              inputStyle={{color:'#fff'}}
                         />
                         <Input
                              placeholder='Idade:' placeholderTextColor={'gray'}
                              leftIcon={{ type: 'font-awesome', name: 'hourglass-half', color: 'white' }}
                              keyboardType="numeric"
                              onChangeText={value => setIdade(value)}
                              inputStyle={{color:'#fff'}}
                         />

                         <Input
                         
                              placeholder='Digite seu email:'placeholderTextColor={'gray'}
                              leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }}
                              onChangeText={value => setEmail(value)}
                              inputStyle={{color:'#fff'}}
                         />
                         <Input
                              placeholder='Digite sua senha:'placeholderTextColor={'gray'}
                              secureTextEntry={true}
                              leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
                              onChangeText={value => setSenha(value)}inputStyle={{color:'#fff'}}
                             
                         />

                    </View>
                    <View style={Style.formFooter}>

                    </View>

                    <View style={Styles.buttonContainer}>
                <View style={Styles.button}>
                <Button radius={"lg"} type="gradient"
                title="Cadastrar" onPress={handleCadastrar}/>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}></TouchableOpacity>
                </View>
            </View>
            {mensagem ? <Text style={Styles.mensagem}>{mensagem}</Text>:null}
            
 
   
                    
                    
                    </ScrollView>
          </SafeAreaView>



     );

}