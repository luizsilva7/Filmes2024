import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style';


export default function CardMovies({ titulo, nota, imagem, texto }) {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={styles.containerJogos} onPress={() => navigation.navigate('Details', { titulo: titulo, nota: nota, imagem: imagem, texto: texto })}>

            <Image style={styles.images} source={{uri:(`https://image.tmdb.org/t/p/original/${imagem}`)}} />
                <Text style={styles.titulo}>{titulo} </Text>

                <Text style={styles.textNota}> {nota} </Text>


            </TouchableOpacity>
        </>


    );


}