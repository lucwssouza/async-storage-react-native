import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style/global';

function TelaTres({ navigation }) {

    let c = 8960 * 6930;
    const [valorC, setValorC] = useState('');
    const saveValue = async () => {
        try {
            await AsyncStorage.setItem('c', JSON.stringify(c));
            await AsyncStorage.setItem('valorC', JSON.stringify(valorC));
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

    console.log(c);
    console.log(valorC);


    const enviar = () => {
        saveValue();
        navigation.navigate('Resultado')
    }

    loadValue();
    return (
        <View style={styles.container}>
            <Text style={styles.texto2}>8960 x 6930</Text>
            <TextInput style={styles.TextInput}
                value={valorC}
                onChangeText={(text) => {
                    setValorC(text);
                }}></TextInput>
            <Button title='SALVAR' onPress={enviar}></Button>
            <Text></Text>
            <Button title='VOLTAR TELA 2' onPress={() => navigation.navigate('TelaDois')}></Button>
        </View>
    );
}
export default TelaTres;