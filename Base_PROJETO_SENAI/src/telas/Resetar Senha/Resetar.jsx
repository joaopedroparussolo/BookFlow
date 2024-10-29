import React, { useState } from 'react';
import { View, Button, TextInput, Text, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
// import styles from '../navegacao/Styles';


const ResetSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleResetSenha = async () => {
        if (!email) {
            Alert.alert("por favor, insira seu email")
        }

        const data = {
            email: email
        }

        try {

            // verificar se o email existe nobanco de dados:
            const response = await axios.post('http://10.0.2.2:8085/api/reset', data);

            if (response.status === 200) {
                // exibir o formulario para trocar a senha:
                setMostrarFormulario(true);
            }
            else if (response.status === 404) {
                Alert.alert('Email não encontrado. Verfique o email digitado')
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('email nõ encontrado. Verifique o email digitado');
            }
            else {
                Alert.alert('erro ao resetar a senha:', error);
            }
        }
    };

    const handleTrocarSenha = async () => {
        // verificar se as senhas coincidem:
        if (senha !== confirmaSenha) {
            Alert.alert("A senhas não coincidem");
            return;
        }


        const data = {
            email: email,
            senha: senha
        }

        try {

            // fazer solicitação para trocar a senha:
            const response = await axios.post('http://10.0.2.2:8085/api/resetpassword', data);

            if (response.status === 200) {
                navigation.navigate('Login');
                Alert.alert("Senha trocada com sucesso");
            }
            else {
                Alert.alert('Erro ao trocar a senha');
            }
        }
        catch (error) {
            Alert.alert('Erro ao trocar a senha', error);

        }
    };

    return (
        
        <View style={Styles.container}>
            
            <Text style={Styles.title}>Mudar Senha:</Text>
            <TextInput
                style={Styles.input}
                placeholder=''
                value={email}
                onChangeText={setEmail}
            />
            {!mostrarFormulario && (
                <Button title='Resetar Senha' onPress={handleResetSenha} />
            )}
            {mostrarFormulario && (
                <>
                    <TextInput
                        style={Styles.input}
                        placeholder=''
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder=''
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                        secureTextEntry
                    />
                    <Button title='Resetar a Senha' onPress={handleTrocarSenha} color={"red"} />

                </>
            )}
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'black',
    },

});

export default ResetSenha;