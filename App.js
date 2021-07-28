import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <ScrollView> */}
        <Header />
        <Content />
        {/* <Footer /> */}
      {/* </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  )
}

