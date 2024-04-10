import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function Resultado({ navigation }) {


  //onst [valor, setValor] = useState('');
  const [valorA, setValorA] = useState('');
  const [a, setA] = useState('');
  const [valorB, setValorB] = useState('');
  const [b, setB] = useState('');
  const [valorC, setValorC] = useState('');
  const [c, setC] = useState('');

  const loadValue = async () => {
    try {
      const valueA = await AsyncStorage.getItem('a');
      const valueAA = await AsyncStorage.getItem('valorA');
      const valueB = await AsyncStorage.getItem('b');
      const valueBB = await AsyncStorage.getItem('valorB');
      const valueC = await AsyncStorage.getItem('c');
      const valueCC = await AsyncStorage.getItem('valorC');
      // const valueB = await AsyncStorage.getItem('b');
      // const valueC = await AsyncStorage.getItem('c');
      if (valueA !== null) {
        setA(JSON.parse(valueA));
        setValorA(JSON.parse(valueAA));
        setB(JSON.parse(valueB));
        setValorB(JSON.parse(valueBB));
        setC(JSON.parse(valueC));
        setValorC(JSON.parse(valueCC));
        // setB = JSON.parse(valueB);
        //// setC = JSON.parse(valueC);
      }
    } catch (e) {
      console.error('Erro ao carregar valor:', e);
    }
  };
  loadValue();
  console.log(a);
  console.log(valorA);

  if (a == valorA) {
    console.log('correto');
  } else {
    console.log('errou');
  }
  if (b == valorB) {
    console.log('correto')
  } else {
    console.log('errou')
  }
  if (c == valorC) {
    console.log('correto')
  } else {
    console.log('errou')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultTitle}>Resultado:</Text>
      <Text></Text>

      {a == valorA ?
        (
          <>
            <View style={styles.fofinhodotio}>
              <Image style={styles.icone} source={require("./assets/ok.png")} />
              <Text style={styles.texto2}>(a) 589 x 60 = {valorA}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.fofinhodotio}>
              <Image style={styles.icone} source={require("./assets/nok.png")} />
              <Text style={styles.textonok}>(a) 589 x 60 = {valorA}</Text>
              <Text></Text>
              </View>
              <View style={styles.correcao}>
                <Text style={styles.texto2}>(a) Valor correto: {a}</Text>
            </View>
          </>

        )
      }

      {b == valorB ?
        (
          <>
            <View style={styles.fofinhodotio}>
              <Image style={styles.icone} source={require("./assets/ok.png")} />
              <Text style={styles.texto2}>(b) 10 x 6930 = {valorB}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.fofinhodotio}>
              <Image style={styles.icone} source={require("./assets/nok.png")} />
              <Text style={styles.textonok}>(b) 10 x 6930 = {valorB}</Text>
              <Text></Text>
              </View>
              <View style={styles.correcao}>
                <Text style={styles.texto2}>(b) Valor correto: {b}</Text>
            </View>
          </>

        )
      }


      {c == valorC ?
        (
          <>
            <View style={styles.fofinhodotio}>
              <Image style={styles.icone} source={require("./assets/ok.png")} />
              <Text style={styles.texto2}>(c) 8960 x 6930 = {valorC}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.fofinhodotio}>
              <Image style={styles.icone} source={require("./assets/nok.png")} />
              <Text style={styles.textonok}>(c) 8960 x 6930 = {valorC}</Text>
              <Text></Text>
            </View>
            <View style={styles.correcao}>
              <Text style={styles.texto2}>(c) Valor correto: {c}</Text>
            </View>
          </>

        )
      }



      <Text></Text>

      <Button title='SALVAR' onPress={() => navigation.navigate('TelaUm')}></Button>
    </View>
  );
}

export default Resultado;
