import React from 'react'
import { Link } from '@react-navigation/native';
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default function ScrollHorizontal({ navigation }) {
    return (
        <SafeAreaView>



            <ImageBackground style={{ width: 412, height: 730, }} source={require('../../../res/img/BOOKFLOW/WallpaperSobre.png')} >


                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 25, marginTop: 30, fontFamily: 'Judson-Regular',  }}>
                        Este aplicativo facilita a troca de livros físicos entre usuários e ajuda a conectar amantes de leitura. Você pode cadastrar os livros que deseja trocar e negociar trocas através de mensagens. Além disso, pode avaliar suas experiências e interagir com a comunidade de leitores, tornando a troca de livros simples e prazerosa.
                    </Text>

                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 45, marginTop: 50, fontFamily: 'Judson-Regular' }}>
                        Obrigado por contribuir!!!
                    </Text>
                </View>




            </ImageBackground>






        </SafeAreaView>
    )
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


})
