import { View, Text, StyleSheet } from "react-native";
import React from 'react';

export default function Header(){
    return(
        <View style={styles.viewHeader}>
            <Text style={styles.textHeader}>SoulHealth</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader:{
        backgroundColor: "#673D75",
        height:"5%",
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    textHeader:{
        color:"white",
        fontSize:25,
    },
})