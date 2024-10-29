// //Bibliotecas 
//*pagina para navegar na internet clicando no botao*
// import React from "react";
// import {View,Text,StyleSheet,Linking, Button} from "react-native";

// const Home = () =>{
//     return(
//         <View style={styles.container}>
//             <Text style={styles.title}>SENAI</Text>
//             <Button title="senai marilia" onPress={()=>{Linking.openURL('https://marilia.sp.senai.br/')}}>SENAI MARÍLIA</Button>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor:'red',
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     title:{
//         fontSize:24,
//         fontWeight:'bold',
//         color:'white'
//     },
// });

// export default Home;

//---------------------------------------------------------
//Botões de navegação

import React from "react";
import { View, Text, Button, Image} from "react-native";
import styles from "../../telas/Home/Style";

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../res/img/logo-app.png')} style={styles.logo}/>
            <Text style={styles.title}>MusiLoad</Text>

            <View style={styles.buttonContainer}>
            <Button radius={"lg"} type="gradient"
                    title ="Cadastrar"
                    onPress={() => navigation.navigate('Cadastro')}
                />
            </View>

            <View style={styles.buttonContainer}>
            <Button radius={"lg"} type="gradient"
                    title ="Login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
};
