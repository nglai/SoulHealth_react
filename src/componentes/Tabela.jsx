import React from 'react';
 import { View, Text, StyleSheet } from 'react-native';

export default function Tabela(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Confira o significado do resultado do seu IMC:</Text>
            <View style={styles.tabela}>
                <Text style={styles.tabelaTexto1}>Abaixo do peso</Text>
                <Text style={styles.tabelaTexto2}>Fadiga,stress, ansiedade</Text>
            </View>
            <View style={styles.tabela}>
                <Text style={styles.tabelaTexto1}>Peso normal</Text>
                <Text style={styles.tabelaTexto2}>Menor risco de doenças cardíacas e vasculares</Text>
            </View>
            <View style={styles.tabela}>
                <Text style={styles.tabelaTexto1}>Acima do peso</Text>
                <Text style={styles.tabelaTexto2}>Fadiga, má circulação, varizes</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EFDEF7",
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        width:"90%",
        marginLeft:"5%",
        marginTop:"5%",
        textAlign:"center",
        paddingBottom:10,
        borderRadius:10,
    },

    tabela:{
        flexDirection: "row",
        
    },

    texto:{
        fontSize:20,
        textAlign:"center",
        margin:10,
    },

    tabelaTexto1:{
        borderWidth:1,
        width:"35%",
        textAlign:"center",
        padding:10,
        backgroundColor:"white",
    },
    tabelaTexto2:{
        borderWidth:1,
        width:"60%",
        textAlign:"center",
        padding:10,
        backgroundColor:"white",
    }
})