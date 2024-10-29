import React, { useEffect, useState } from 'react'
import imagemFundo from './../../../../res/img/The-Black-Hole-Sample-Images-Eawn.jpeg'
import { Image } from '@rneui/base';
import { ImageBackground, SafeAreaView, FlatList, View, Text, TouchableOpacity, TouchableOpacityBase, } from 'react-native';


export default function ListaAlunos() {

    const [aluno , setAluno] = useState([]);
    //Lista de dados externos
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setAluno(json))
    },[]);
// lista de dados local
    console.log(aluno)

    const alunos = [
        { id: '1', nome: 'Vitor', ra: '123456', idade: '18' },
        { id: '2', nome: 'Joao', ra: '654321', idade: '19' },
        { id: '3', nome: 'Felipe', ra: '123465', idade: '23' },
        { id: '4', nome: 'Matheus', ra: '154263', idade: '43' },
        { id: '5', nome: 'Gisele', ra: '532689', idade: '46' },
        { id: '6', nome: 'Pedro', ra: '753692', idade: '15' },
    ];

    const ExibirAlunos = ({ item }) => (
        <TouchableOpacity>
        <View style={{backgroundColor: '#ffffff72', padding: 10,}}>
            
        <Text style={{color: 'white'}}>{item.name}</Text>
            
        </View>
        </TouchableOpacity>


    );
    console.log(alunos);
    return (
        <SafeAreaView style={{flex: 1}}>
        <ImageBackground style ={{height: '100%'}}source={imagemFundo}>


        <FlatList
            data={aluno}
            keyExtractor={item => item.id}
            renderItem={ExibirAlunos}


        />
    </ImageBackground>
    </SafeAreaView>


    );
};