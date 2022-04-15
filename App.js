import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState(''); 

  function handleSubmit(){
    const alt = altura/100;
    const imc = peso / (alt * alt);
    if (imc < 18.6){
      alert('Seu IMC é: ' + imc.toFixed(2) + '\nVocê está a baixo do peso!')
    }else if (imc >= 18.6 && imc < 24.9){
      alert('Seu IMC é: ' + imc.toFixed(2) + '\nPeso ideal!')
    }else if (imc >= 24.9 && imc < 34.9){
      alert('Seu IMC é: ' + imc.toFixed(2) + '\nVocê está levemente a cima do peso!')
    }else if (imc >= 34.9){
      alert('Seu IMC é: ' + imc.toFixed(2) + '\nVocê está a cima do peso!')
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>
      <TextInput 
        style={styles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso)} //toda vez que o valor for alterado a variavel será atualizada
        placeholderTextColor={'#fff'}        
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura)} //toda vez que o valor for alterado a variavel será atualizada
        placeholderTextColor={'#fff'}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.butaoCalcular}
      onPress={handleSubmit}
      >
        <Text style={styles.butaoCalcularTexto}>Calcular</Text>
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: 'black',
  },
  input:{
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 23,
    color: '#fff',
  },
  butaoCalcular:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  butaoCalcularTexto:{
    color: '#fff',
    fontSize: 25,
  },
});