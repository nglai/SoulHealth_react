import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react';
import Informacao from "./Informacao";
import IMC from "./Imc";
import Tabela from "./Tabela";
import Footer from "./Footer";

export default function Content(){
    return(
        
        <View style={{flex:9}}>
        <ScrollView>
            <Informacao
                titulo="Bem vindo ao seu app informativo de saúde e bem estar!"
                autor="Ng Lai"
                conteudo="Nós da equipe SoulCode esperamos que você aproveite muito este aplicativo cheio de informações e conteúdos úteis."
            />
            <Informacao
                titulo="Entenda sobre o que é IMC e o que a medida diz sobre sua saúde"
                autor="Erika Braz"
                conteudo="Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal.O resultado final representa o quanto a pessoa tem de massa muscular + massa de gordura + massa óssea."
            />
            <Text style={styles.texto}>CALCULE SEU IMC</Text>
            <IMC/>
            <Tabela/>
            <Informacao
                titulo="Dica de exercícios 1 - Faça uma avaliação médica"
                autor="Boa Consulta"
                conteudo="É importante fazer um checkup ao se iniciar uma nova atividade. O profissional saberá avaliar suas condições de saúde, como pressão arterial, capacidade cardiorrespiratória e índice de gordura corporal, além do histórico de lesões. Assim, poderá indicar qual o exercício aeróbio mais recomendado no seu caso."
            />
            <Informacao
                titulo="Dica de exercícios 2 - Começe devagar"
                autor="Boa Consulta"
                conteudo="Conheça seus limites, começe devagar para se conhecer. Utilize os 10 ou 15 primeiros minutos do treino como aquecimento, exercitando-se em ritmo lento. Depois, acelere aos poucos de acordo com a reposta de seu corpo. À medida que ganha experiência, você descobre sua velocidade de equilíbrio – na qual consegue sustentar a atividade por mais tempo."
            />
            <Footer/>
        </ScrollView>    
        </View>
        
    )
}

const styles = StyleSheet.create({
    texto:{
        marginTop: 10,
        fontSize:20,
        textAlign:"center",
    },
})