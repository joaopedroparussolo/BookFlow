import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity, Alert, } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from '@rneui/base';
import Rive from 'rive-react-native'

export default Homesenai = ({ navigation }) => {

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
    // const handleResetSenha = () =>{
    //      navigation.navigate('Resetar');
    //  }

    //validar que os campos não são vazios
    const handleLogin = async () => {
        if (!email || !senha) {
            setMensagem('Todos os campos são obrigatórios')
            return;
        }

        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/login', data);
            Alert.alert('Login realizado com sucesso');
            navigation.navigate('BookPrincipal');
        } catch (error) {
            console.log(error);
            setMensagem('Ocorreu um erro ao realizar o login. Tente novamente!!!')
        }
    }





    return (

        <SafeAreaView style={styles.container}>


            <ImageBackground style={{ width: 415, height: 660 }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >





                <TextInput
                    color={'black'}
                    placeholder='Digite seu nome de usuário:' placeholderTextColor={'gray'}
                    onChangeText={value => setEmail(value)}
                    editable
                    multiline
                    maxLength={40}
                    style={{
                        width: '70%', height: 40, alignSelf: 'center',
                        borderColor: "black", backgroundColor: 'white', marginTop: 140,
                        borderRadius: 10, zIndex: 60
                    }}
                />

                <View style={styles.item}>


                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                        locations={[0, 0.5, 0.9]} colors={['#993131', '#E06723']} style={styles.linearGradient}>


                        <Image
                            style={{ width: 60, height: 60, marginTop: 10, zIndex: 80, }} source={require('../../../res/img/BOOKFLOW/user.png')} >
                        </Image>

                        <Text style={{ marginLeft: 75, marginTop: -43, fontSize: 23, color: 'white', fontFamily: 'Judson-Regular', }}>
                            Owll - 17 anos
                        </Text>

                    </LinearGradient>



                </View>





                <Text style={{ color: 'white', zIndex: 10, alignSelf: 'center', fontSize: 19, textAlign: 'center',fontFamily: 'JuliusSansOne-Regular', marginTop: 15,}}>
                    Aqui aparecerão todos os seus livros cadastrados!!!
                </Text>
                <ScrollView horizontal>

                    <View style={{ width: 'auto', flexDirection: 'row' }}>



                        {/* <View style={styles.item2}>

                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}></LinearGradient>


                        </View>
                        <View style={styles.item2}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}></LinearGradient>


                        </View>
                        <View style={styles.item2}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}></LinearGradient>


                        </View>
                        <View style={styles.item2}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}></LinearGradient>


                        </View>
                        <View style={styles.item2}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}></LinearGradient>


                        </View>
                        <View style={styles.item2}>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c']} style={styles.linearGradient}></LinearGradient>
                        </View> */}
                    </View>



                </ScrollView>

            </ImageBackground>

        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    textInput: {
        width: '100',
        backgroundColor: 'white',


    },

    Link: {
        alignSelf: 'center',
        marginTop: 10,
        color: 'white',

    },

    Button: {
        borderRadius: 90,
        alignItems: 'center',

        marginTop: 100,

    },

    mensagem: {
        color: 'white',
        marginTop: 10,
        alignSelf: 'center',
    },

    item: {
        width: 370,
        height: 160,
        marginHorizontal: 20,
        marginTop: -130,
        zIndex: 50,
        alignSelf: 'center',
    },
    item2: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: -80,
        alignSelf: 'center',
        zIndex: 10,

    },
    item3: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: 90,
        alignSelf: 'center',
        zIndex: 20,
    },



    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
    },
});