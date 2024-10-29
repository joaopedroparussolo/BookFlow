import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    buttonContainer:{
        marginBottom: 10,
        width: '50%',
    },
    logo:{
        width:200,
        height:150,
        marginBottom:120,
        alignItems:'center',
    },
});
export default styles;