
import { SafeAreaView, View,} from "react-native";
import {Text} from '@rneui/themed';
import styles from "./Styles"
export default function Exemplo (){
    return(
<SafeAreaView style={styles.container}>
        
        <Text h2>Olá Mundo!</Text>
        <View style={styles.item1}></View>
        <View style={styles.item2}></View>
        <View style={styles.item3}></View>
        
</SafeAreaView>



    );
};