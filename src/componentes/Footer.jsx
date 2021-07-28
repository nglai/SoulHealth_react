import { View, Text, StyleSheet } from "react-native";
import React from 'react';

export default function Footer(){
    return(
        <View style={styles.viewFooter}>
            <Text style={styles.textFooter}>Desenvolvido por: Ng Lai</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        backgroundColor: "#673D75",
        alignItems: 'center',
        // flex:1
        paddingVertical:10
    },
    textFooter:{
        color:"white",
        fontSize:12,
    },
})