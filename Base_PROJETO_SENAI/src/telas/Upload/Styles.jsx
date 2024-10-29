import { StyleSheet, Image,} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',


    },
    titulo: {
        color: 'white',
        padding: 50,

    },
    divTitulo: {
        flex: 5,
        alignItems: 'center',
        marginTop: 1

        
        

    },

    formCadastro: {
        flex: 5,
        backgroundColor: 'black',
        alignItems: 'center',
        



    },
    formFooter: {
        flex: 0,
        backgroundColor: 'black',
        

    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },
    imgLogo: {
        height: 170,
        width: 190,

    },
    mensagem:{
        color: 'white',
        marginTop: 10,
    }



});


export default styles;