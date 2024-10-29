import React from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input, Button, Icon, Image, LinearGradient } from '@rneui/themed'
import styles from "../Tela Principal/Styles"
import axios from 'axios';
// import img1 from '../../../res/img/CAPAS CANVAS/Capa eminem.png';
// import ImagemLogo from '../../../res/img/'

export default Principal = ({ navigation }) => {

  function SobreScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <SafeAreaView style={styles.container}>

          <ScrollView>


            <View style={styles.container}>
              <ImageBackground source={require('../../../res/img/Cassete.png')} style={styles.img7} resizeMode="cover">

                <Text>O novo app “MusiLoad”, visa a idéia de você poder fazer Uploads
                {"\n"}de músicas em um ambiente mais fácil para o caminho do {"\n"}sucesso.
                  Este app é feito para artistas pequenos, que buscam o {"\n"}sucesso de
                  forma menos burocrática e sem muitos artistas tão {"\n"}grandes que
                  acabem ofuscando os seus projetos e idéias.
                  Com {"\n"}todo o respeito aos artistas grandes, mas temos que admitir
                  que, {"\n"}com artistas maiores na cena, o caminho para se destacar{"\n"}
                  fica um pouco mais difícil.</Text>
              </ImageBackground>
            </View>



          </ScrollView>



        </SafeAreaView>





      </View>
    );
  }

  const Tab = createBottomTabNavigator();


  return (


    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Configurações') {
            iconName = focused
              ? 'bars'
              : 'bars';
          } else if (route.name === 'Notificações') {
            iconName = focused ? 'bell' : 'bell';
          } else if (route.name === 'Uploads') {
            iconName = focused ? 'plus' : 'plus';
          }

          // You can return any component that you like here!
          return <Icon type='font-awesome' name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Sobre" component={SobreScreen}
        options={{
          headerStyle: { backgroundColor: 'black', },
          headerTintColor: '#fff'
        }
        } />

    </Tab.Navigator>

  );

};
