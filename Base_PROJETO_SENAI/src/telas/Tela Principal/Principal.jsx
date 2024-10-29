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
  function SettingsScreen() {
    return (


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>


        <SafeAreaView style={styles.container1}>
          <View style={styles.container}>
            <ImageBackground source={require('../../../res/img/Cassete.png')} style={styles.img6} resizeMode="cover">


            </ImageBackground>
          </View>

          <ScrollView vertical>

            <View style={styles.buttonContainer}>
              <Button radius={"lg"} type="gradient"
                title="Trocar Foto de Perfil"
                onPress={() => navigation.navigate('Secundaria')}
              />
            </View>
            <View style={styles.buttonContainer2}>
              <Button radius={"lg"} type="gradient"
                title="Trocar de Conta"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
            <View style={styles.buttonContainer3}>
              <Button radius={"lg"} type="gradient"
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
              />
            </View>

          </ScrollView>
        </SafeAreaView>


      </View>


    );
  }

  function HomeScreen() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SafeAreaView style={styles.container}>

          <ScrollView vertical>
            {/* <View style={styles.buttonContainerM4}>
            <Button radius={"lg"} type="gradient"
                    title ="M4"
                  //  onPress={() => navigation.navigate('Sobre')}
                />
            </View>  */}

            <View style={styles.container}>
              <ImageBackground source={require('../../../res/img/VERDE.jpeg')} style={styles.img6} resizeMode="cover">

                {/* <View style={styles.container}>
              <Image source={require('../../../res/img/VERDE.jpeg')} style={styles.img6} />
            </View> */}



                <View style={styles.item}>

                  <View style={styles.img1}>


                    <Image source={require('../../../res/img/M4.png')} style={styles.img1} />
                    
                    <Text>TETO - M4</Text>
                  </View>


                </View>
                <View style={styles.item}>
                  <View style={styles.img2}>
                    <Image source={require('../../../res/img/Emicida.png')} style={styles.img2} />
                    <Text>EMICIDA - Levanta e Anda</Text>
                  </View>

                </View>
                <View style={styles.item}>
                  <View style={styles.img3}>
                    <Image source={require('../../../res/img/WIU.png')} style={styles.img3} />
                    <Text>WIU - Ciumenta</Text>
                  </View>

                </View>
                <View style={styles.item}>
                  <View style={styles.img4}>
                    <Image source={require('../../../res/img/X.png')} style={styles.img4} />
                    <Text>XXXTENTACION - Riot</Text>
                  </View>

                </View>
                <View style={styles.item}>
                  <View style={styles.img5}>
                    <Image source={require('../../../res/img/MATUE.png')} style={styles.img5} />
                    <Text>MATUÊ - Máquina do Tempo</Text>
                  </View>

                </View>

              </ImageBackground>
            </View>

            <View style={styles.buttonContainer4}>
              <Button radius={"lg"} type="gradient"
                title="Fazer Upload"
                // onPress={() => navigation.navigate('Upload')}
              />
            </View>

          </ScrollView>



        </SafeAreaView>

      </View>
    );
  }

  function NotificationScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <SafeAreaView style={styles.container}>

          <ScrollView vertical>


            <View style={styles.container}>
              <ImageBackground source={require('../../../res/img/Cassete.png')} style={styles.img7} resizeMode="cover">

                <View style={styles.notificacoes}>
                  <Text>Aqui aparecem suas notificações!!!</Text>
                </View>

              </ImageBackground>
            </View>



          </ScrollView>



        </SafeAreaView>



        <Text>Aqui aparecem suas notificações!</Text>

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
      <Tab.Screen name="Configurações" component={SettingsScreen}
        options={{
          headerStyle: { backgroundColor: 'black', },
          headerTintColor: '#fff'
        }
        } />
      <Tab.Screen name="Uploads" component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: 'black', },
          headerTintColor: '#fff'
        }
        } />

      <Tab.Screen name="Notificações" component={NotificationScreen}
        options={{
          headerStyle: { backgroundColor: 'black', },
          headerTintColor: '#fff'
        }
        } />

    </Tab.Navigator>

  );

};
