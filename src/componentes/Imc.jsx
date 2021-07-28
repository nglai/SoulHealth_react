import React, { useState } from 'react';
 import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

 export default function IMC(){
     const [calculo, setCalculo] = useState({
         altura:0,
         peso:0,
         resultado:"",
     })

     const handleInputChange = (parametro, valor) => {
         setCalculo({
             ...calculo,[parametro]: valor
         })
     }

     const funcaoimc = () => {
        let situacao = calculo.peso / (calculo.altura ** 2)
        if(situacao < 18.4){
            setCalculo({
                ...calculo, resultado:`${situacao.toFixed(2)} Kg/m² (Abaixo do peso)`
            })
        }
        else if(situacao >= 18.5 && situacao <= 24.9){
            setCalculo({
                ...calculo, resultado:`${situacao.toFixed(2)} Kg/m² (Peso normal)`
            })
        }
        else {
            setCalculo({
                ...calculo, resultado:`${situacao.toFixed(2)} Kg/m² (Acima do peso)`
            })
        }
     }

     return(
         <View style={styles.container}>
             <View style={styles.alinhamento}>
            <TextInput style={styles.input}
            placeholder="Altura em metros"
            keyboardType="numeric"
            onChangeText={
                (valor) => handleInputChange('altura', parseFloat(valor))
            } 
            />

            <TextInput style={styles.input}
            placeholder="Peso em kilos"
            keyboardType="numeric"
            onChangeText={
                (valor) => handleInputChange('peso', parseFloat(valor))
            } 
            />
            </View>

            <TouchableOpacity
                style={styles.botao}
                onPress={funcaoimc}>
                <Text style={styles.corBotao}>Calcular IMC</Text>
            </TouchableOpacity>

            <Text style={styles.resultado}>IMC: {calculo.resultado}</Text>

         </View>
     )
 }

 const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D980F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        borderRadius:10,
        width:"80%",
        marginLeft:"10%",
        marginTop:10,

    },

    alinhamento:{
        flexDirection: "row",
    },

    input:{
        backgroundColor: "white",
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        padding:10,
        marginLeft:4,
        marginRight:4,
        textAlign:"center",
        width: "45%"
    },

    botao:{
        backgroundColor: "#8B0BC2",
        borderWidth:1,
        borderRadius:50,
        padding:10,
        marginTop: 10,
        marginBottom: 10,
    },
    
    corBotao:{
       color:"white",
    },

    resultado:{
        backgroundColor: "white",
        borderWidth:1,
        padding:10,
        width: "80%",
        textAlign:"center",
        marginBottom: 10,
    }
})