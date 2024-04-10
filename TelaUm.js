import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaUm({ navigation }) {


  let a = 589 * 60;
  const [valorA, setValorA] = useState('');
  
  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('a', JSON.stringify(a));
      await AsyncStorage.setItem('valorA', JSON.stringify(valorA));
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
 console.log(a);
    console.log(valorA);
  const enviar = () => {
   
    saveValue();
    navigation.navigate('TelaDois')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto2}>589 x 60</Text>
      <TextInput style={styles.TextInput}
        value={valorA}
        onChangeText={(text) => {
          setValorA(text);
        }}></TextInput>
      <Button title='SALVAR' onPress={enviar}></Button>
    </View>
  );
}

export default TelaUm;
