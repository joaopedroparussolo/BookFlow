import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Button, StyleSheet, Alert, Style } from "react-native";
import Logo from '../../res/img/SENAI.png';
import { Image,} from '@rneui/themed'
import axios from 'axios'; //Axios é utilizado para comunicar com a API (request)

const Cadastrarsesi = ({ navigation }) => {
    const [mensagem, setMensagem] = useState('');
    const [formData, setFormData] = useState({
        id:'',
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    console.log(formData);

    //validar que os campos não são vazios
    const handleCadastrar = async () => {
        if (!formData.nome || !formData.sobrenome || !formData.email || !formData.senha) {
            setMensagem('Todos os campos são obrigatórios')
            return;
        }

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/create', formData);
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('Loginn');
        } catch (error) {

            console.log(error);
            setMensagem('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
           
        }
    }

    return(

        
        <View style = {styles.container}>
            
            <Text style={styles.title}>Cadastrar</Text>
            <View style={styles.Logo}>
               <Image source={require('../../res/img/SENAI.png')} style={styles.imgLogo} />
               </View>
            {/* <TextInput
            style={styles.input}
            placeholder="ID"
            onChangeText={(text)=>handleInputChange('id', text)}
            value={formData.id}            
            keyboardType="numeric"
            /> */}
            <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor={'gray'}
            onChangeText={(text)=>handleInputChange('nome', text)}
            value={formData.nome}            
            />
            <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            placeholderTextColor={'gray'}
            onChangeText={(text)=>handleInputChange('sobrenome', text)}
            value={formData.sobrenome}            
            />

            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            onChangeText={(text)=>handleInputChange('email', text)}
            value={formData.email}            
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={'gray'}
            onChangeText={(text)=>handleInputChange('senha', text)}
            value={formData.senha}  
                 
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cadastrar" onPress={handleCadastrar}/>
                    <TouchableOpacity onPress={()=> navigation.navigate('Loginn')}></TouchableOpacity>
                </View>
            </View>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text>:null}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color:'black',
        marginBottom:20,
    },
    input:{
        height:40,
        borderColor: 'gray',
        borderWidth:1,
        marginBottom:10,
        padding:10,
        width:'80%',
        color:'black',
     
        
    },
    buttonContainer:{
        flexDirection:'column',
        alignItems:'center',
        width:'40%',
       
    },
    button:{
        marginBottom:10,
        width:'100%',
    },
    mensagem:{
        color:'black',
        marginTop:10,
    },

    styleLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imgLogo: {
        height: 60,
        width: 200,
        marginTop: 0,

    },
    
});

export default Cadastrarsesi;


