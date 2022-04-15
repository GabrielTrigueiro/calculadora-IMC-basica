import React from "react";
import { View, Text, StyleSheet} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Bem vindo ao App! </Text>
      <Text style={styles.descricao}> Começando do zero</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'grey',
    justifyContent:'center',
    alignItems:'center',
  },
  titulo:{
    fontSize: 30,
    color: 'white',
  },
  descricao:{
    fontSize: 20,
    color: 'white',
  },
});