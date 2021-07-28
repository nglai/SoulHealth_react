import { View, Text, StyleSheet} from "react-native";
import React from 'react';

export default function Informacao(props){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.autor}>{props.autor}</Text>
            <Text style={styles.conteudo}>{props.conteudo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width:"90%",
        marginLeft:"5%",
        // marginTop:"5%",
        textAlign:"center",
        marginVertical:10,
    },

    titulo:{
        fontSize:20,
        textAlign:"center",
    },

    autor:{
        textAlign:"justify",
        fontSize:15,
    },
    conteudo:{
        textAlign:"justify",
        fontSize:15,
        backgroundColor: "#EFDEF7",
        borderWidth:1,
        borderRadius:10,
        padding:10,
    }
})