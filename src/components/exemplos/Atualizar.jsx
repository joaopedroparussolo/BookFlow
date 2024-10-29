import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button,} from "react-native";
import axios from "axios";

const Atualizar = ({ navigation, route }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome ] = useState('');
    const [idade,setIdade] = useState('');
    const [Id,setId] = useState('');

    const id = route.params.id //Obter o id por parametro

    const data = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };

    const handleAtualizar = async () => {
        if (!nome || !sobrenome || !idade) {
            Alert.alert('Erro','Por favor, preencha todos os campos seu imbecil');
            return;
        };
        try{
            await axios.put(`http://10.0.2.2:8085/api/joao/pedro/${id}`,data)
            Alert.alert('Atualização realizada com sucesso');
            navigation.navigate('Home');
        }catch(error){
            if(error.response.status === 401)
        {
            setMensagem('O ID já existe na base de dados')
        }
        else{
            console.log(error);
            setMensagem('Ocorreu um erro ao cadastrar o usuário')
            }
        }
       
    };

    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizar Usuário</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={id}
                    onChangeText={setId}
                    placeholder="ID do usuário"
                    keyboardType="numeric"
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>

                        <Button title="Atualizar" onPress={handleUpdate} />
                        <Button title="Listar" onPress={handleUpdate} />
                    </View>
                </View>
                <Text style={styles.mensagem}>{mensagem}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
      
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
    form:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
    },
    input:{
        width:'80%',
        height:40,
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:10,
    },
    mensagem:{
        color:'black',
    },
    button:{
        flex:1,
        marginHorizontal:5,
        
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        
    },


});

export default Atualizar;