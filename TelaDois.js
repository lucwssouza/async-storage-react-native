import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaDois({ navigation }) {

  let b = 10 * 6930;
  const [valorB, setValorB] = useState('');
  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('b', JSON.stringify(b));
      await AsyncStorage.setItem('valorB', JSON.stringify(valorB));
    } catch (e) {
      console.error('Erro ao salvar valor:', e);
    }
  };
  const loadValue = async () => {
    try {
      const value = await AsyncStorage.getItem('a');
      if (value !== null) {
        a = JSON.parse(value);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };
  
  console.log(b);
  console.log(valorB);
  
  const enviar = () => {
    saveValue();
    navigation.navigate('TelaTres')
  }

  loadValue();
  return (
    <View style={styles.container}>
      <Text style={styles.texto2}>10 x 6930</Text>
      <TextInput style={styles.TextInput}
        value={valorB}
        onChangeText={(text) => {
          setValorB(text);
        }}></TextInput>
      <Button title='SALVAR' onPress={enviar}></Button>
      <Text></Text>
      <Button title='VOLTAR TELA 1' onPress={() => navigation.navigate('TelaUm')}></Button>
    </View>
  );
}
export default TelaDois;